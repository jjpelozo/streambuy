import React, { useState, useEffect } from "react";
import "./PublisherName.css";

import { db } from "../../firesbase";

const PublisherName = ({ author, subscribers, top, pic, idVideo }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState([]);

  const user = author;
  console.log(user);
  const setLike = async () => {
    await db.collection("likes").doc(user).set({
      like: 1,
    });
  };

  const getLikes = async () => {
    db.collection("likes").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setLikes(docs);
    });
  };
  const onDeleteLike = async (user) => {
    await db.collection("likes").doc(user).delete();
  };

  useEffect(() => {
    getLikes();
  }, []);

  const handleLike = () => {
    console.log("hice click");
    setLiked(!liked);
    if (!liked) {
      setLike();
    } else {
      onDeleteLike(user);
    }
  };

  return (
    <div className="authCont" style={{ marginLeft:"80%", marginTop: top }}>
       <div className="actCont">
        <div className="itemPublisher">
          <i
            className="fas fa-eye"
            style={{
              color: "white",
              fontSize: "1.4em",
            }}
          />
          <span> {subscribers} </span>
        </div>
        <div className="itemHeart">
          <i
            className="fas fa-heart itemHeart"
            onClick={handleLike}
            style={{
              color: liked ? "red" : "white",
              fontSize: "1.4em",
            }}
          />
          <span> {likes.length} </span>
        </div>
       
        <div className="itemPublisher">
          <i
            className="fas fa-comment-dots"
            style={{
              color: "white",
              fontSize: "1.4em",
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default PublisherName;
