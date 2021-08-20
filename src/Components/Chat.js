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
    console.log("hiceclick");
  };

  return (
    <div className="chatCont" style={{ width: width, marginTop: top }}>
      <div className="chatMessage ">
        <div className="sendMessage">
          <form>
            <input
              className="inputChat"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Escribi algo"
            />
          </form>
      <div className="" onClick={sendMessage}>
        <i
          className="fa fa-paper-plane chatItem "
          style={{
            color: "red",
            fontSize: "2em",
            height: "60px",
            width: "60px",
          }}
        />
      </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
