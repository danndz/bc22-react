import { combineReducers } from "redux";
import colorReducer from "./colorReducer";
import countReducer from "./countReducer";

// combineReducers là hàm dùng để kết hợp tất cả reducer lại thành một reducer tổng
const rootReducer = combineReducers({
  count: countReducer,
  colors: colorReducer,
});

export default rootReducer;
