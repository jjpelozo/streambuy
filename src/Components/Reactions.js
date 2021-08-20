import React from "react";
import Heart from "react-animated-heart";

const Reactions = ({ top, newReaction}) => (
    <div style={{marginTop: top, marginLeft: "78%", position: "absolute"}}>
        <Heart isClick={newReaction} />
    </div>
);

export default Reactions;