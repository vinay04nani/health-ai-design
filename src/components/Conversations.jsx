import React from "react";
import "../App.css";
import assistantLogo from "../assets/assistantLogo.png";
import previousicon from "../assets/previousicon.png";
import inputmessage from "../assets/inputmessage.png";
import send from "../assets/send.png";

const Conversations = () => {
  const handleSendClick = () => {
    console.log("Send icon clicked");
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src={assistantLogo} alt="Assistant Logo" className="assistant-logo" />
          <div className="header-text">
            <h2 className="assistant-title">Health-AI Assistant</h2>
            <p className="assistant-subtitle">Always here to help</p>
          </div>
        </div>
        <button className="previous-chat-btn">
          <img src={previousicon} alt="previous icon" className="previous-icon" />
          Previous Chat 1
        </button>
      </aside>
      <main className="main-content">
        <div className="top-right-call-btn">
          <button className="start-call-btn-left">Start Call</button>
        </div>
        <div className="chat-body"></div>
        <div className="chat-input-container">
          <div className="chat-input-wrapper">
            <img src={inputmessage} alt="inputmessage" className="inputmessage" />
            <input type="text" className="chat-input" placeholder="Message Health-AI Bot" />
            <button className="send-button" onClick={handleSendClick}>
              <img src={send} alt="send" className="send" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Conversations;
