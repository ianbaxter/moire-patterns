import React from "react";
import "./Line.css";

const Line = ({ lineWidth }) => {
  let lineStyle = {
    width: `${lineWidth}%`,
    marginLeft: `${lineWidth}%`
  };

  return <div className="line" style={lineStyle} />;
};

export default Line;
