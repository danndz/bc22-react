import React, { useState } from "react";
import cn from "classnames";

const SeatItem = ({ seat, isDisabled, onSelect }) => {
  // state để quản lý trạng thái ghế có đang được chọn hay không
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    // Kiểm tra nếu trạng thái ghế là không chọn (isSelected là false) và không được phép chọn thêm (isDisabled là true) thì không cho phép thay đổi trạng thái ghế bằng cách return kết thúc hàm
    if (!isSelected && isDisabled) {
      return;
    }

    // setIsSelected: thay đổi trạng thái của ghế
    setIsSelected(!isSelected);
    // Truyền giá trị và trạng thái của ghế vừa chọn lên component SeatList
    onSelect(seat, !isSelected);
  };

  const classes = cn("btn btn-secondary", {
    // key: value <=> classname: conditional
    "btn-danger": seat.daDat,
    "btn-success": isSelected,
  });

  return (
    <button
      style={{ width: "50px", marginBottom: "10px" }}
      className={classes}
      disabled={seat.daDat}
      onClick={handleSelect}
    >
      {seat.soGhe}
    </button>
  );
};

export default SeatItem;
