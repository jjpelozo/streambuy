import React from "react";
import "./NextStream.css";

const NextStream = () => {
  return (
    <div className="nextStream">
      <div className="nextStreamBody">
        <div className="nextStreamCont">
          <div>
            <h2 className="nextStreamTitle">
              El proximo Stream <span></span>
              comienza en:
            </h2>
          </div>
          <h2 className="nextStreamCount">5 Dias</h2>
          <img alt="logo_Marca" height="auto" src="RickySarkanylogo.png" width="200" />
        </div>
        <div className="nextStreamNot">
          <p className="nextStreamNotTitle">
            ¿Te avisamos? <span></span>
          </p>
          <p>(Activá las notificaciones)</p>
        </div>
      </div>
    </div>
  );
};

export default NextStream;
