import React, { useReducer } from "react";

function Counter() {
  function counterReducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        throw new Error(`Unknown action: ${action.type}`);
    }
  }

  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <h1>Counter</h1>

      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </>
  );
}

export default Counter;
