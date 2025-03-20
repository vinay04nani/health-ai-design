import json
import requests
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

API_URL = "http://80.241.215.212:11434/api/generate"

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    user_input: str


@app.get("/")
def home():
    return {"message": "Welcome to the API"}


@app.post("/chat")
def chat(request: ChatRequest):
    """
    Forwards the user's prompt to the remote streaming API
    and concatenates the partial responses into one string.
    """
    payload = {
        "model": "llama2:latest",
        "prompt": request.user_input,
        "max_tokens": 150,
        "temperature": 0.7
    }

    try:
        response = requests.post(API_URL, json=payload)

        print("Raw API Response:\n", response.text)

        if response.status_code != 200:
            raise HTTPException(
                status_code=response.status_code,
                detail=f"Error from external API: {response.status_code}"
            )

        
        lines = response.text.strip().split("\n")

        full_response = ""
        for line in lines:
            
            try:
                line_data = json.loads(line)
                
                if "response" in line_data:
                    full_response += line_data["response"]
            except json.JSONDecodeError as e:
               
                print(f"JSON decode error for line: {line}\n{e}")
                continue

        return {"bot_response": full_response if full_response else "No response received."}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")
