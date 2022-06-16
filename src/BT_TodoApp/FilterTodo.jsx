import React from "react";
import { useDispatch } from "react-redux";

const FilterTodo = () => {
  const dispatch = useDispatch();
  const changeFilter = (status) => {
    dispatch({ type: "CHANGE_FILTER", data: status });
  };

  return (
    <div className="mt-3">
      {/* Hiển thị tất cả todos */}
      <button
        className="btn btn-primary me-2"
        onClick={() => changeFilter("all")}
      >
        All
      </button>
      {/* Hiển thị những todos chưa hoàn thành */}
      <button
        className="btn btn-success me-2"
        onClick={() => changeFilter("active")}
      >
        Active
      </button>
      {/* Hiển thị những todos đã hoàn hành */}
      <button
        className="btn btn-warning"
        onClick={() => changeFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterTodo;
