import React from "react";

const Box = ({ on, toggle, id }) => {
  const styles = {
    backgroundColor: on ? "#222222" : "#e2e2e2",
  };

  return <div className="box" style={styles} onClick={() => toggle(id)}></div>;
};

export default Box;
