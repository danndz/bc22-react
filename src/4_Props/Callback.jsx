import React from "react";

export default function Callback(props) {
  // onClick là props do component cha truyền xuống
  // onClick là 1 callback function
  const { onClick } = props;

  const handleClick = () => {
    // Khi gọi props onClick và truyền vào params sẽ kích hoạt hàm handleClick ở component Props và hàm handleClick sẽ nhận được params
    onClick("Cybersoft");
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
