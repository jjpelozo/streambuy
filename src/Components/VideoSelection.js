
import React, { useState, useEffect } from "react";
import "./VideoSelection.css";
import { db } from "../firesbase";

const VideoSelection = ({views, setViews, author}) => {
  const [id, setId] = useState(null);
  
  const setView = async () => {
     db.collection("views").doc(author).set({
      view: 1,
    });
  };

  const getViews = async () => {
    db.collection("views").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setViews(docs);
    });
  };
  const onDeleteViews = async (author) => {
    await db.collection("views").doc(author).delete();
  };

  useEffect(() => {
    getViews();
  }, []);



  const goStream = () => {
    localStorage.setItem("video", id);
    window.location.href = "http://localhost:3000";
  
  };

  return(
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <div class="fadeIn first">
          <img src="/cubiq.png" alt="User Icon" width="80px" />
        </div>

        <form>
          <input 
            type="text" 
            id="login"
            class="fadeIn second"
            placeholder="Id del video"
            onChange={e => setId(e.target.value)} 
          />
          <input type="submit" class="fadeIn fourth" value="Ir al stream" onClick={goStream}/>
        </form>

      </div>
    </div>
  )
};

export default VideoSelection;