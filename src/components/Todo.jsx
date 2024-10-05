import React, { useReducer, useState } from "react";
function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false },
      ];
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

function Todo() {
  const [state, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text !== null || text !== "") {
      dispatch({ type: "add", text });
      setText("");
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "250px",
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <ul>
        {state.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100px",
            }}
          >
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => dispatch({ type: "toggle", id: todo.id })}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: "remove", id: todo.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
