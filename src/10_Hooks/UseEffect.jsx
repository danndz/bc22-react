// Một khái niệm để thay thế cho lifecycle của class component trong function component là useEffect
// Ta import hàm useEffect từ react
import React, { useState, useEffect } from "react";

/**
 * MOUNTING:
 * - render
 * - run callback của useEffect()
 *
 * UPDATING: state/props thay đổi hoặc component cha re-render
 * - render
 * - run cleanup callback của useEffect (nếu có) - nếu depedencies thay đổi
 * - run callback của useEffect() - nếu depedencies thay đổi
 *
 * UNMOUNTING:
 * - run cleanup callback của useEffect (nếu có)
 */

const UseEffect = () => {
  const [count, setCount] = useState(0);

  const [message, setMessage] = useState("");
  const handleSetMessage = () => {
    const value = prompt("Input your message");
    setMessage(value);
  };

  // useEffect nhận vào tham số là 1 callback function
  // useEffect sẽ thực thi callback này mỗi khi component re-render
  // Tương đương componentDidMount + componentDidUpdate + componentWillUnmount
  // useEffect(() => {
  //   // run effect
  //   console.log("effect run");

  //   // Thực thi một tác vụ bất đồng bộ
  //   const timer = setTimeout(() => {
  //     console.log("Count:", count);
  //   }, 3000);

  //   // Từ lần render thứ 2 trở đi, cleanup effect sẽ được thực thi trước run effect tiếp theo hoặc trước khi component bị huỷ (unmount)
  //   return () => {
  //     console.log("cleanup effect");
  //     clearTimeout(timer);
  //   };
  // });

  // useEffect nhận vào tham số thứ 1 là callback function và tham số thứ 2 là 1 array rỗng
  // useEffect sẽ thực thi callback đúng một lần duy nhất sau lần render đầu tiên
  // Tương đương componentDidMount + componentWillUnmount (nếu có cleanup effect)
  // useEffect(() => {
  //   // effect
  //   console.log("effect run");

  //   // cleanup effect được gọi  khi component bị huỷ bỏ (unmount)
  //   return () => {
  //     console.log("cleanup effect");
  //   };
  // }, []);

  // useEffect nhận vào tham số thứ 1 là callback function và tham số thứ 2 là 1 array chứa các biến (state/props) phụ thuộc (depedencies)
  // useEffect sẽ thực thi callback sau lần render đầu tiên và những lần render tiếp theo nếu giá trị của các biến phụ thuộc (depedencies) bị thay đổi
  // Tương đương: componentDidMount + componentDidUpdate (nếu phụ thuộc bị thay đổi) + componentWillUnmount (nếu có cleanup effect)
  useEffect(() => {
    // effect
    console.log(`Effect count run - Count: ${count}`);

    // Từ lần render thứ 2 trở đi, cleanup effect sẽ được thực thi trước run effect tiếp theo (nếu phụ thuộc bị thay đổi) hoặc trước khi component bị huỷ (unmount)
    return () => {
      console.log("Effect count cleanup");
    };
  }, [count]);

  useEffect(() => {
    console.log(`Effect message run - Message: ${message}`);
  }, [message]);

  console.log("render run");
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <br />
      <br />

      <p>Message: {message}</p>
      <button onClick={handleSetMessage}>Set message</button>
    </div>
  );
};

export default UseEffect;
