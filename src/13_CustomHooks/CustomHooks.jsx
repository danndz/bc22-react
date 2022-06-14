import React, { useState } from "react";
import useCounter from "./useCounter";
import useForm from "./useForm";

// Function component
const CustomHooks = () => {
  // const [count, setCount] = useState(0);
  // const onDecrease = () => setCount(count - 1);
  // const onIncrease = () => setCount(count + 1);
  const { count, onIncrease, onDecrease } = useCounter(0);

  // const [values, setValues] = useState({ username: "", email: "" });
  // const handleChange = (evt) => {
  //   const { name, value } = evt.target;
  //   setValues((values) => ({ ...values, [name]: value }));
  // };
  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   console.log(values);
  // };
  const { values, handleChange, handleSubmit } = useForm({
    username: "",
    email: "",
  });
  const onSubmit = () => {
    alert("Submit success");
  };
  const onError = () => {
    alert("Submit error");
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={onDecrease}>Decrease</button>
      <button onClick={onIncrease}>Increase</button>

      <br />
      <br />

      <h1>User Form</h1>
      <form
        noValidate
        className="w-25"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            name="username"
            value={values.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default CustomHooks;
