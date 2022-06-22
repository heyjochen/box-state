import boxes from "./boxes";

const Box = () => {
  boxes.map((box) => <div key={box.id} className="box"></div>);
};

export default Box;
