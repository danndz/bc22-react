import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";

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
    dispatch(addTodo(todo, handleAddSuccess));
  };

  const handleAddSuccess = () => {
    // reset lại input sau khi thêm thành công
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
