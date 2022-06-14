import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Colors = () => {
  // kết nối tới redux store và lấy state colors
  const colors = useSelector((state) => state.colors);
  const dispatch = useDispatch();

  const handleAddColor = () => {
    const color = prompt("Input your color:");
    dispatch({ type: "ADD_COLOR", data: color });
  };
  const handleRemoColor = () => {
    const color = prompt("Input your color:");
    dispatch({ type: "REMOVE_COLOR", data: color });
  };
  return (
    <div>
      <h1>Colors: {colors.join(", ")}</h1>
      <button onClick={handleAddColor}>Add Color</button>
      <button onClick={handleRemoColor}>Remove Color</button>
    </div>
  );
};

export default Colors;
