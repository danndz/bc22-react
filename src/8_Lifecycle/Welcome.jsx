import React, { Component } from "react";

export default class Welcome extends Component {
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
