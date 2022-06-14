import React from "react";
import Colors from "./Colors";
import Counter from "./Counter";
import CounterHook from "./CounterHook";

const Redux = () => {
  return (
    <div>
      <h1>Redux</h1>
      <Counter />
      <br />
      <br />
      <CounterHook />
      <br />
      <br />
      <Colors />
    </div>
  );
};

export default Redux;
