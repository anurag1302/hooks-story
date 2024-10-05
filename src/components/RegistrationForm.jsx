import React, { useReducer } from "react";

function formReducer(state, action) {
  switch (action.type) {
    case "update_field":
      return { ...state, [action.field]: action.value };
    case "reset_form":
      return action.initialState;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

function RegistrationForm() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "update_field",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleReset = () => {
    dispatch({ type: "reset_form", initialState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", state);
    handleReset();
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
      <button className="btn reset" type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

export default RegistrationForm;
