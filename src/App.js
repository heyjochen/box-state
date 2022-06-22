import { useState } from "react";
import React from "react";
import Box from "./Box";
import boxes from "./boxes";

import "./App.css";

function App() {
  const [squares, setSquares] = useState(boxes);

  const squareElements = squares.map((box) => <Box key={box.id} on={box.on} />);

  return <>{squareElements}</>;
}

export default App;
