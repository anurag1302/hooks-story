import React, { useState } from "react";
import { z } from "zod";
// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  confirmPassword: z
    .string()
    .min(6, "Confirm Password is required")
    .refine(
      (val, ctx) => val === ctx.parent.password,
      "Passwords do not match"
    ),
  address: z.object({
    street: z.string().min(1, "Street is required"),
    city: z.string().min(1, "City is required"),
    zip: z.string().min(5, "Zip code must be 5 characters long"),
  }),
  hobbies: z.array(z.string().min(1, "Each hobby must have a value")),
});

//Complex Form Component
const ComplexForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: {
      street: "",
      city: "",
      zip: "",
    },
    hobbies: [""],
  });

  const [errors, setErrors] = useState({});

  function handleSubmit() {
    console.log("form submitted");
  }

  function handleChange() {
    console.log("elements change event");
  }

  function handleNestedChange() {
    console.log("nested change");
  }

  function handleHobbiesChange() {
    console.log("hobbies change");
  }

  function addHobby() {
    console.log("add hobby");
  }

  return (
    <>
      <h1>Complex Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>

        <h3>Address</h3>
        <div>
          <label>Street</label>
          <input
            type="text"
            name="street"
            value={formValues.address.street}
            onChange={handleNestedChange}
          />
          {errors.street && <span>{errors.street}</span>}
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formValues.address.city}
            onChange={handleNestedChange}
          />
          {errors.city && <span>{errors.city}</span>}
        </div>
        <div>
          <label>Zip Code</label>
          <input
            type="text"
            name="zip"
            value={formValues.address.zip}
            onChange={handleNestedChange}
          />
          {errors.zip && <span>{errors.zip}</span>}
        </div>

        <h3>Hobbies</h3>
        {formValues.hobbies.map((hobby, index) => (
          <div key={index}>
            <input
              type="text"
              value={hobby}
              onChange={(e) => handleHobbiesChange(index, e.target.value)}
            />
            <button type="button" onClick={() => removeHobby(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addHobby}>
          Add Hobby
        </button>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ComplexForm;
