import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("LandingPage rendered");
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center", backgroundColor: "#fff" }}>
      <h1 style={{ color: "#000" }}>Welcome to Health-AI Assistant</h1>
      <p style={{ color: "#000" }}>
        Your AI-powered assistant for real-time conversations.
      </p>
      <button
        style={{
          padding: "0.8rem 1.5rem",
          fontSize: "1rem",
          border: "none",
          borderRadius: "8px",
          background: "linear-gradient(to right, #00A3FF, #FF00C7)",
          color: "#fff",
          cursor: "pointer",
        }}
        onClick={() => navigate("/conversations")}
      >
        Start Call
      </button>
    </div>
  );
};

export default LandingPage;
