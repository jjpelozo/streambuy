import React, { useState, useEffect } from "react";
import "./ViewChat.css";
import { db } from "../firesbase";

const ViewChat = ({ width, top, author, pic }) => {
  const [chats, setChats] = useState([]);

  const getChats = async () => {
    db.collection("chats")
      .orderBy("timestamp", "desc")
      .onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setChats(docs.slice(0, 3).reverse());
      });
  };
  useEffect(() => {
    getChats();
  }, []);

  const message = [
    {
      id: 1,
      name: "juana",
      message: "Hola, que buen producto",
    },
    {
      id: 2,
      name: "Maria",
      message: "Hola",
    },
    {
      id: 3,
      name: "Julia",
      message: "Muy lindo",
    },
 
  ];

  return (
    <div className="viewChatCont" style={{ width: width, marginTop: top }}>
      <div className="chatBody">
        {chats.map((message) => (
          <div className="chatView">
            <p className="">
              <span className="chatName">{message.name}</span>
              <span className="chatMessage"> {message.message}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewChat;
