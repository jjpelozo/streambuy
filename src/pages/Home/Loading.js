import React from "react";



const textStyle = {
  marginTop: "40px",
  color: "black",
  fontWeight: "bold",
  fontSize: "2.3vh",
  maxWidth: "250px",
};

const loadingComponent = ({ text }) => (
  <div className="indexContainer">
    <img alt="spinner" height="auto" src="logo streambuy negro-01.png" width="400" />
    <div style={textStyle}>{text}</div>
  </div>
);

export default loadingComponent;