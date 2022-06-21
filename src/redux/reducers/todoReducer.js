// Phần không sử API
// // Khởi tạo state mặc định cho todoReducer
// const initialState = {
//   todos: [
//     {
//       id: 1,
//       title: "Learn React",
//       description: "Learn React Hooks",
//       isCompleted: true,
//     },
//     {
//       id: 2,
//       title: "Learn Redux",
//       description: "Learn Redux vs React",
//       isCompleted: false,
//     },
//   ],
//   // Lưu trữ trạng thái filter: all || active || completed
//   filter: "all",
//   // Lưu trữ giá trị tìm kiếm todo
//   search: "",
// };

// // Với state là một array/object ta cần return về state là một array/object mới => luôn luôn dùng cú pháp return {...state, keyA: valueA, keyB: valueB}
// // Trường hợp state là một object và các thuộc tính bên trong state lại là một array/object ta cũng cần phải tạo mới 1 array/object trước khi gán lại cho các thuộc tính của state
// // Để redux nhận biết được là state đã thay đổi và cập nhật lại cho components
// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "COMPLETE_TODO": {
//       const todos = state.todos.map((todo) => {
//         if (todo.id === action.data) {
//           return { ...todo, isCompleted: true };
//         }
//         return todo;
//       });

//       return { ...state, todos };
//     }
//     case "DELETE_TODO": {
//       const todos = state.todos.filter((todo) => todo.id !== action.data);
//       return { ...state, todos };
//     }
//     case "ADD_TODO": {
//       const todos = [...state.todos, action.data];
//       return { ...state, todos };
//     }
//     case "CHANGE_FILTER": {
//       // Nếu thay đổi state todos khi filter sẽ bị mất dữ liệu
//       // const todos = state.todos.filter((todo) => {
//       //   if (action.data === "active") {
//       //     return !todo.isCompleted;
//       //   }
//       //   if (action.data === "completed") {
//       //     return todo.isCompleted;
//       //   }
//       //   return true;
//       // });
//       // return { ...state, todos };

//       return { ...state, filter: action.data };
//     }
//     case "CHANGE_SEARCH_VALUE": {
//       return { ...state, search: action.data };
//     }
//     default:
//       return state;
//   }
// };

import * as actionTypes from "../constants/todoConstants";

// Phần sử dụng API
const initialState = {
  todos: [],
  search: "",
  filter: "all",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TODOS: {
      return { ...state, todos: action.data };
    }
    case actionTypes.CHANGE_FILTER: {
      return { ...state, filter: action.data };
    }
    case actionTypes.CHANGE_SEARCH: {
      return { ...state, search: action.data };
    }
    default:
      return state;
  }
};

export default todoReducer;
