import React from "react";
import { useDispatch } from "react-redux";

const SearchTodo = () => {
  const dispatch = useDispatch();

  const handleSearch = (evt) => {
    // Kiểm tra nếu không phải là phím Enter thì bỏ qua
    if (evt.key !== "Enter") return;

    // Nếu là phím Enter thì lấy giá trị của input và dispatch action
    dispatch({
      type: "CHANGE_SEARCH_VALUE",
      data: evt.target.value
    });
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search todo..."
        onKeyDown={handleSearch}
      />
    </div>
  );
};

export default SearchTodo;
