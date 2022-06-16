import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    isCompleted: false,
  });
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setTodo((todo) => ({ ...todo, [name]: value }));
  };

  const handleAdd = () => {
    const id = Math.floor(Math.random() * 100);
    dispatch({ type: "ADD_TODO", data: { ...todo, id } });
    // reset lại input sau khi thêm
    setTodo({ title: "", description: "" });
  };

  return (
    <div className="mb-3 d-flex">
      <input
        className="form-control me-2"
        placeholder="Title"
        name="title"
        value={todo.title}
        onChange={handleChange}
      />
      <input
        className="form-control me-2"
        placeholder="Description"
        name="description"
        value={todo.description}
        onChange={handleChange}
      />
      <button className="btn btn-warning" onClick={handleAdd}>
        ADD
      </button>
    </div>
  );
};

export default AddTodo;
