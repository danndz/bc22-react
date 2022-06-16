import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, filter, search } = useSelector((state) => state.todo);
  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "active") {
        return !todo.isCompleted;
      }
      if (filter === "completed") {
        return todo.isCompleted;
      }
      return true;
    })
    .filter((todo) => {
      const searchValue = search.toLowerCase();
      const titleTodo = todo.title.toLowerCase();
      return titleTodo.includes(searchValue);
    });

  return (
    <ul className="p-0">
      {filteredTodos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
