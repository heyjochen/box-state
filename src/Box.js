import React from "react";

const Box = ({ on }) => {
  const [isOn, setIsOn] = React.useState(on);

  const onOrOff = () => {
    setIsOn((prev) => !prev);
  };

  const styles = {
    backgroundColor: isOn ? "#222222" : "#e2e2e2",
  };

  return <div className="box" onClick={onOrOff} style={styles}></div>;
};

export default Box;
