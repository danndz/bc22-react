// Custom hook:
// Là 1 function nhận vào input và return output
// Tên file phải bắt đầu bằng use...
// Khác với function component, output không phải là jsx mà là một dữ liệu nào đó, vd: array, object, string, number,...
// Khác với function bình thường, custom hook có thể sử dụng được các hook khác của react như useState, useEffect

// Ưu điểm của custom hook
// - Tách biệt logic ra khỏi component
// - Có thể tái sử dụng lại các logic được viết trong custom hook ở những component khác

// Khi nào sử dụng custom hook
// - Khi một đoạn code logic, liên quan tới state và effect mà được sử dụng nhiều lần ở các component khác nhau

import { useState } from "react";

const useCounter = (initialValue) => {
  // Tạo state
  const [count, setCount] = useState(initialValue);
  // Xử lý state
  const onDecrease = () => setCount(count - 1);
  const onIncrease = () => setCount(count + 1);
  // return về dữ liệu
  return { count, onIncrease, onDecrease };
};

export default useCounter;
