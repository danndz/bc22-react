import React, { useState, useEffect } from "react";
import axios from "axios";
import useCounter from "./useCounter";
import useForm from "./useForm";
import useRequest from "./useRequest";

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

  // const [data, setData] = useState(null); // State lưu trữ data từ API
  // const [isLoading, setIsLoading] = useState(false); // State lưu trữ trạng thái loading khi call API
  // const [error, setError] = useState(null); // State lưu trữ lỗi khi call API thất bại
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setIsLoading(true); // set isLoading thành true trước khi call API
  //       const { data } = await axios({
  //         method: "GET",
  //         url: "https://jsonplaceholder.typicode.com/todos",
  //       });
  //       setData(data); // set data là kết quả từ API trả về
  //       setIsLoading(false); // set isLoading thành false khi call API thành công
  //     } catch (error) {
  //       setIsLoading(false); // set isLoading thành false khi call API thất bại
  //       setError(error.resonse.data); // set error là lỗi từ API trả về
  //     }
  //   };

  //   fetchData();
  // }, []);

  const { data, isLoading, error } = useRequest({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/todos",
  });

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

      <br />
      <br />

      <ul>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {(data || []).map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default CustomHooks;
