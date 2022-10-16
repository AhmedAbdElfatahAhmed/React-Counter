import React, { useState } from "react";
import Counter from "./../counter/Counter";
import CounterAction from "./../counter-action/CounterAction";
import "./CounterContainer.css";
const CounterContainer = () => {
  let [number, setNumber] = useState(0);
  const increment = () => {
    setNumber(++number);
  };
  const decrement = () => {
    number > 0 && setNumber(--number);
  };
  return (
    <div className="counter-countainer">
      <Counter counter={number} />
      <CounterAction increaseNumber={increment} decreaseNumber={decrement} />
    </div>
  );
};

export default CounterContainer;
