// Khái niệm hook là cung cấp cách sử state và lifecycle trong function component
// snippet: rafce

// Để sử dụng state trong function component ta import hàm useState từ react
import React, { useState } from "react";

const UseState = () => {
  // useState nhận vào 1 tham số là giá trị khởi tạo của state
  // useState return về 1 array gồm 2 phần tử
  // - Phần tử đầu tiên thể hiện giá trị hiện tại của state
  // - Phần tử thứ hai là 1 hàm dùng để thay đổi giá trị của state
  const [count, setCount] = useState(0);

  // Nếu muốn sử dụng nhiều state, ta cứ việc khai báo nhiều lần hàm useState
  const [message, setMessage] = useState("");
  const handleSetMessage = () => {
    const value = prompt("Input your message");
    setMessage(value);
  };

  // State là 1 array
  const [colors, setColors] = useState(["red", "green", "blue"]);
  const addColor = () => {
    const color = prompt("Input your color:");
    setColors((colors) => [...colors, color]);
  };
  const removeColor = () => {
    const color = prompt("Input your color:");
    setColors((colors) => colors.filter((item) => item !== color));
  };

  // State là 1 object
  const [user, setUser] = useState({ username: "", email: "" });
  const handleChange = (evt) => {
    const { name, value } = evt.target;

    // const newUser = {...user, [name]: value}
    // setUser(newUser)

    setUser((user) => ({ ...user, [name]: value }));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <br />
      <br />

      <p>Message: {message}</p>
      <button onClick={handleSetMessage}>Set message</button>

      <br />
      <br />

      <p>Colors: {colors.join(", ")}</p>
      <button onClick={addColor}>Add Color</button>
      <button onClick={removeColor}>Remove Color</button>

      <br />
      <br />

      <p>
        User: {user.username} - {user.email}
      </p>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default UseState;
