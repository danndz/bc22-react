import React, { useState } from "react";
import data from "./data.json";
import SeatItem from "./SeatItem";

const SeatList = ({ numberOfSeat, onConfirmSelection }) => {
  // state để lưu trữ danh sách ghế đang chọn
  const [selectedSeats, setSelectedSeats] = useState([]);
  // biến isDisabled kiểm tra nếu chưa chọn số lượng ghế (!numberOfSeat) HOẶC số lượng ghế đươc phép đặt và số lượng ghế đang đặt bằng nhau thì không cho chọn thêm ghế nữa
  const isDisabled =
    !numberOfSeat || Number(numberOfSeat) === selectedSeats.length;

  // Viết hàm callback xử lý khi user chọn 1 ghế nào đó
  const handleSelect = (seat, isSelected) => {
    if (isSelected) {
      // Chọn ghế
      setSelectedSeats((state) => [...state, seat.soGhe]);
    } else {
      // Xoá ghế
      setSelectedSeats((state) => state.filter((item) => item !== seat.soGhe));
    }
  };

  return (
    <div className="mt-5">
      {data.map((row) => {
        return (
          <div key={row.hang} className="row">
            {row.danhSachGhe.map((seat) => {
              return (
                <div key={seat.soGhe} className="col-sm-1">
                  <SeatItem
                    seat={seat}
                    isDisabled={isDisabled}
                    onSelect={handleSelect}
                  />
                </div>
              );
            })}
          </div>
        );
      })}

      <button
        className="btn btn-primary"
        onClick={() => onConfirmSelection(selectedSeats)}
      >
        Confirm Selection
      </button>
    </div>
  );
};

export default SeatList;
