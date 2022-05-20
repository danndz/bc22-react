import React from "react";

export default function ProductCarts(props) {
  const { carts, onDelete } = props;

  return (
    <div
      className="modal fade"
      id="product-carts"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Giỏ hàng
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã sản phẩm</th>
                  <th>Tên sản phẩm</th>
                  <th>Hình ảnh</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {carts.map((item) => {
                  return (
                    <tr key={item.maSP}>
                      <td>{item.maSP}</td>
                      <td>{item.tenSP}</td>
                      <td>
                        <img
                          src={item.hinhAnh}
                          alt={item.tenSP}
                          width="50px"
                          height="50px"
                        />
                      </td>
                      <td>{item.soLuong}</td>
                      <td>{item.giaBan}</td>
                      <td>{item.soLuong * item.giaBan}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => onDelete(item.maSP)}
                        >
                          Xoá
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
