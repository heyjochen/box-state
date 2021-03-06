import { useState } from "react";
import React from "react";
import Box from "./Box";
import boxes from "./boxes";

import "./App.css";

function App() {
  const [squares, setSquares] = useState(boxes);

  const toggle = (id) => {
    setSquares((prev) => {
      return prev.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  };

  const squareElements = squares.map((box) => (
    <Box key={box.id} on={box.on} id={box.id} toggle={toggle} />
  ));

  return <>{squareElements}</>;
}

export default App;
