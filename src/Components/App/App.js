import React from "react";
import { useState } from "react";
import "./App.css";
import Line from "../Line/Line";

function App() {
  let [lineWidth, setLineWidth] = useState(1);

  let numberOfLines = Math.floor(50 / lineWidth);
  let lines = Array(numberOfLines);
  for (let i = 0; i < numberOfLines; i++) {
    lines.push(<Line key={i} lineWidth={lineWidth} />);
  }

  const changeLineWidth = ({ target }) => {
    let newLineWidth = target.value;
    setLineWidth(newLineWidth);
  };

  return (
    <div className="app-container">
      <div className="lines lines--spinning1">{lines}</div>
      <div className="lines lines--spinning2">{lines}</div>
      <div className="lines lines--spinning3">{lines}</div>
      <div className="lines lines--spinning4">{lines}</div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="border"></div>
      <input
        type="range"
        orient="vertical"
        name="lineWidth"
        min="0.1"
        max="5"
        defaultValue="1"
        step="0.1"
        onChange={changeLineWidth}
      />
    </div>
  );
}

export default App;
