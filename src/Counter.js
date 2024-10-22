import React from "react";
import "./style.css";
import Header from "./Header";
import CounterClock from "./CounterClock";
const Counter = () => {
  return (
    <div>
      <Header />
      <CounterClock />
    </div>
  );
};

export default Counter;
