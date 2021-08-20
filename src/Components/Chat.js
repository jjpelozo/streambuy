import React, { useState, useEffect } from "react";
import "./Chat.css";

import { db } from "../firesbase";
import firebase from "firebase";

const Chat = ({ width, top, author }) => {
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("chats").add({
      message: input,
      name: author,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="chatCont" style={{ marginTop: top }}>
      <form className="chatMessage">
        <div className="sendMessage">
          <div className="chatItem">
            <i
              class="fas fa-comment-dots"
              style={{
                color: "#FF2D55",
                fontSize: "2.5em",
                width: "20%",
              }}
            ></i>
          </div>
          <div>
            <input
              className="inputChat"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Escribi algo"
            />
          <i
            className="fa fa-paper-plane"
            style={{
              color: "white",
              fontSize: "1.4em",
            }}
            onClick={sendMessage}
          />
          </div>
       
     
        </div>

      </form>
    </div>
  );
};

export default Chat;
