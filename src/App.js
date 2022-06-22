import React from "react";
import boxes from "./boxes";
import "./App.css";

function App() {
  return boxes.map((box) => <div key={box.id} className="box"></div>);
}

export default App;
