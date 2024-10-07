// Counter.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from "./CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(Number(e.target.value))}
      />

      <button
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
      >
        Increment by Amount
      </button>

      <button onClick={() => dispatch(incrementAsync(Number(incrementAmount)))}>
        Increment Async
      </button>
    </div>
  );
};

export default Counter;
