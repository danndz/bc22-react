import axios from "axios";
import * as actionTypes from "../constants/todoConstants";

// Sử dụng: dispatch(getTodos())
// redux chỉ cho phép action là một plain object
// VD: const getTodos = (data) => { type: "GET_TODOS", data }
// Nếu muốn viết một async action ta cần dùng custom middleware
// export const getTodos = async () => {
//   try {
//     // Call API
//     const { data } = await axios.get(
//       "https://629757b414e756fe3b2dc8f0.mockapi.io/api/todos"
//     );
//     // Thành công return về action
//     return { type: "GET_TODOS", data };
//   } catch (error) {
//     console.log(error);
//   }
// };

const FILTER_MAPPING = {
  all: undefined,
  active: false,
  completed: true,
};
// Khi sử dụng redux-thunk, action có thể là một function nhận vào 2 tham số là dispatch và getState
export const getTodos = () => {
  // action thunk/middleware
  return async (dispatch, getState) => {
    try {
      // Dùng hàm getState để lấy state search và filter từ store
      const { search, filter } = getState().todo;
      // Call API
      const { data } = await axios.get(
        "https://629757b414e756fe3b2dc8f0.mockapi.io/api/todos",
        {
          params: {
            isCompleted: FILTER_MAPPING[filter],
            title: search || undefined,
          },
        }
      );
      // Thành công dispatch một action để đưa data vào store
      dispatch({ type: actionTypes.GET_TODOS, data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTodo = (todoId) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `https://629757b414e756fe3b2dc8f0.mockapi.io/api/todos/${todoId}`
      );
      // Call API delete todo thành công
      // dispatch action getTodos để call API lấy data mới từ server và set lại state cho store
      dispatch(getTodos());
    } catch (error) {
      console.log(error);
    }
  };
};

export const completeTodo = (todo) => {
  return async (dispatch) => {
    try {
      const { id, ...payload } = todo;
      await axios.put(
        `https://629757b414e756fe3b2dc8f0.mockapi.io/api/todos/${id}`,
        { ...payload, isCompleted: true }
      );
      dispatch(getTodos());
    } catch (error) {
      console.log(error);
    }
  };
};

export const addTodo = (todo, onSuccess) => {
  return async (dispatch) => {
    try {
      await axios.post(
        `https://629757b414e756fe3b2dc8f0.mockapi.io/api/todos`,
        todo
      );
      dispatch(getTodos());
      onSuccess();
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeFilter = (status) => {
  return { type: actionTypes.CHANGE_FILTER, data: status };
};

export const changeSearch = (value) => {
  return { type: actionTypes.CHANGE_SEARCH, data: value };
};









