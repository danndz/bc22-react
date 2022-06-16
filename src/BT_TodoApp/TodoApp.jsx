import React from "react";
import AddTodo from "./AddTodo";
import FilterTodo from "./FilterTodo";
import SearchTodo from "./SearchTodo";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div style={{ minHeight: "100vh" }} className="bg-secondary">
      <div className="container">
        <h1 className="text-center text-white">My todos</h1>

        <div className="row">
          <div className="col-sm-6 mx-auto text-white">
            <AddTodo />

            <SearchTodo />

            <TodoList />

            <FilterTodo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
