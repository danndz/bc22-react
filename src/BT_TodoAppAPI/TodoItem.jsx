import React from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from "../redux/actions/todoActions";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(completeTodo(todo));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li className="d-flex justify-content-between">
      {/* Thêm class text-decoration-line-through vào thẻ div nếu todo.isCompleted là true  */}
      <div className={cn({ "text-decoration-line-through": todo.isCompleted })}>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
      </div>
      <div>
        {/* Button Complete chỉ được hiển thị khi todo.isCompleted là false */}
        {!todo.isCompleted && (
          <button className="btn btn-success me-2" onClick={handleComplete}>
            Complete
          </button>
        )}
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
