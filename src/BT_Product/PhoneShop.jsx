import React, { Component } from "react";
import data from "./data.json";
import ProductCarts from "./ProductCarts";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";

export default class PhoneShop extends Component {
  // snipet: rconst
  // State thường sẽ được khởi tạo bên trong constructor
  constructor(props) {
    super(props);

    this.state = {
      // lưu trữ chi tiết sản phẩm
      selectedProduct: null,
      // lưu trữ danh sách sản phẩm trong giỏ hàng
      carts: [],
    };
  }

  // hàm handleSelectProduct sẽ được truyền xuống component ProductList thông qua prop onSelect
  // Khi bên trong component ProductList gọi tới prop onSelect thì hàm handleSelectProduct sẽ được chạy
  handleSelectProduct = (product) => {
    // Dữ liệu lấy từ component ProductList hiện tại chỉ có thể truy cập được bên trong function này
    console.log("product từ ProductList truyền lên PhoneShop:", product);
    // Để có thể truyền giá trị này xuống component ProductDetails ta cần tạo 1 state và gán giá trị của product cho state đó
    this.setState({ selectedProduct: product });
  };

  handleBuyProduct = (product) => {
    // B1: Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
    const index = this.state.carts.findIndex(
      (item) => item.maSP === product.maSP
    );

    if (index === -1) {
      // B2: Xử lý trường hợp chưa tồn tại trong giỏ hàng => thêm sp vào giỏ hàng
      // khi setState là 1 array/object, luôn luôn phải tạo ra 1 array/object mới và cập nhật trên array/object mới đó, sau đó gán lại cho state
      this.setState((state) => ({
        carts: [...state.carts, { ...product, soLuong: 1 }],
      }));
    } else {
      // B3: Xử lý trượng hợp sản phẩm đã tồn tại trong giỏ hàng => chỉ tăng số lượng

      // Sao chép ra 1 array mới từ state
      const carts = [...this.state.carts];
      // Thay đổi trên array mới
      carts[index].soLuong += 1;
      // Gán array mới lại cho state
      this.setState({ carts });
    }
  };

  handleDeleteProductCart = (productId) => {
    // Nhận được mã sản phẩm từ component ProductCarts truyền lên => xử lý xoá sản phẩm

    // filter trả ra 1 array mới
    const carts = this.state.carts.filter((item) => item.maSP !== productId);

    this.setState({ carts });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Phone Shop</h1>

        <div className="d-flex justify-content-end my-4">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#product-carts"
          >
            Giỏ Hàng
          </button>
        </div>

        <ProductList
          products={data}
          onSelect={this.handleSelectProduct}
          onBuy={this.handleBuyProduct}
        />
        <ProductDetails product={this.state.selectedProduct} />
        <ProductCarts
          carts={this.state.carts}
          onDelete={this.handleDeleteProductCart}
        />
      </div>
    );
  }
}
