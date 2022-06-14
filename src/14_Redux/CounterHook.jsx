import React from "react";
import { useSelector, useDispatch } from "react-redux";

const CounterHook = () => {
  // useSelector: custom hook dùng để truy cập vào state của redux store
  // useSelector nhận vào tham số là một callback function, callback này có tham số là state (state của redux store), giá trị return trong callback này cũng chính là giá trị được trả ra của hàm useSelector
  const { count } = useSelector((state) => {
    return {
      count: state.count,
    };
  });

  // useDispatch: custom hook sẽ trả về hàm dispatch dùng để gửi action lên store
  const dispatch = useDispatch();

  const onIncrease = () => {
    const action = { type: "INCREASE" };
    dispatch(action);
  };

  const onDecrease = () => {
    dispatch({ type: "DECREASE" });
  };

  return (
    <div>
      <h1>React-redux hook</h1>
      <p>Count: {count}</p>
      <button onClick={onIncrease}>Increase</button>
      <button onClick={onDecrease}>Decrease</button>
    </div>
  );
};

export default CounterHook;
