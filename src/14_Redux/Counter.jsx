import React from "react";
import { connect } from "react-redux";

const Counter = (props) => {
  console.log("Props Counter:", props);
  const { count, onIncrease } = props;
  return (
    <div>
      <h1>React-redux connect</h1>
      <p>Count: {count}</p>
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
};

// Kết nối tới redux và lấy state về component để sử dụng
const mapStateToProps = (state) => {
  console.log("RootState:", state);
  // Giá trị được return bên trong object sẽ trở thành props của component
  return {
    count: state.count,
  };
};
const mapDispatchToProps = (dispatch) => {
  // Giá trị được return bên trong object sẽ trở thành props của component
  return {
    onIncrease: () => {
      // Tạo action
      const action = { type: "INCREASE" };
      // Gọi hàm dispatch và truyền vào action để đưa lên store
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
