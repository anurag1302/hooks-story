import React from "react";
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
const ComplexForm = () => {
  return (
    <>
      <h1>Complex Form</h1>
    </>
  );
};

export default ComplexForm;
