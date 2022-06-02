import React, { Component, PureComponent } from "react";

// PureComponent tự xử lý shouldComponentUpdate cho component
// Nó sẽ tự động kiểm tra tất cả props và state của component, nếu có 1 giá trị khác nhau thì nó mới re-render component
// PureComponent so sánh state và props bằng shallow compare
// - Trường hợp muốn so sánh property bên trong object có khác nhau hay không thì PureComponent không làm được

export default class Welcome extends PureComponent {
  // shouldComponentUpdate được chạy ở phase UPDATING (state, props, component cha bị re-render) và được chạy trước hàm render
  // Nếu trong hàm này ta return về false, thì hàm render và componentDidUpdate sẽ không được chạy
  // shouldComponentUpdate(nextProps, nextState) {
  //   // Kiểm tra xem có cần thiết phải render lại component hay không
  //   // Chỉ cần render khi props hoặc state thay đổi

  //   // => Làm sao để kiểm tra xem props hoặc state có thay đổi hay không???
  //   // Khi hàm shouldComponentUpdate được chạy, giá trị của state và props vẫn là giá trị chưa bị thay đổi: console.log(this.props)
  //   // Hàm shouldComponentUpdate cung cấp 2 tham số là giá trị sau khi thay đổi của state và props

  //   // Check những trường hợp component cần re-render và return về true
  //   if (this.props.message !== nextProps.message) {
  //     return true;
  //   }

  //   // Còn lại return false để component không bị re-render
  //   return false;
  // }

  // componentWillUnmount được tự động khởi chạy trước khi component bị huỷ bỏ
  // componentWillUnmount thường dùng để dọn dẹp: clearInterval, clearTimeout, removeEventListener,...
  componentWillUnmount() {
    console.log("Welcome: componentWillUnmount run");
  }

  render() {
    console.log("Welcome: render run");
    const { message } = this.props;

    return (
      <div>
        <h3>Welcome {message}</h3>
      </div>
    );
  }
}
