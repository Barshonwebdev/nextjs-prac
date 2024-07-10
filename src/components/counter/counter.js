"use client"
import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>here is a counter</h1>
      <h1>{counter}</h1>
      <div className="space-x-3">
        <button
          onClick={() => setCounter(counter + 1)}
          className="btn btn-primary"
        >
          increase
        </button>
        <button
          onClick={() => setCounter(counter - 1)}
          className="btn btn-primary"
        >
          decrease
        </button>
      </div>
        </div>
    );
};

export default Counter;