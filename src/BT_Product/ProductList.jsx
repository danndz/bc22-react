import React from "react";

export default function ProductList(props) {
  const { products, onSelect, onBuy } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Mã sản phẩm</th>
          <th>Tên sản phẩm</th>
          <th>Giá bán</th>
          <th>Hình ảnh</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr key={product.maSP}>
              <td>{product.maSP}</td>
              <td>{product.tenSP}</td>
              <td>{product.giaBan}</td>
              <td>
                <img
                  src={product.hinhAnh}
                  alt={product.tenSP}
                  width="70px"
                  height="70px"
                />
              </td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => onSelect(product)}
                >
                  Chi tiết
                </button>
                <button
                  className="btn btn-primary ml-2"
                  onClick={() => onBuy(product)}
                >
                  Mua hàng
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
