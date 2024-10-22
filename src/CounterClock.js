import React, { useState } from "react";
import Number from "./Number";
const CounterClock = () => {
  const [count, setCount] = useState(0);
  const incre = () => setCount(count + 1);
  const decre = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <main class="container">
      <Number data={count} />
      <div id="btn">
        <button id="dec" onClick={decre}>
          decrease
        </button>
        <button id="re" onClick={reset}>
          reset
        </button>
        <button id="inc" onClick={incre}>
          increase
        </button>
      </div>
    </main>
  );
};

export default CounterClock;
