// Tại điểm này để sử dụng state ta sẽ dùng class component
// rcc

import React, { Component } from "react";
import Car from "./Car";

export default class State extends Component {
  // state là 1 object đặc biệt trong class component
  // khi giá trị của state thay đổi, component sẽ tự động chạy lại hàm render
  state = {
    count: 0,
    sum: 0,
    message: "",
  };

  increase = () => {
    // Không được thay đổi trực tiếp state mà phải thông qua hàm setState
    // this.state.count += 1;
    this.setState(
      { count: this.state.count + 1 },
      // Tham số thứ 2 của hàm setState là 1 callback func sẽ được gọi sau khi state cập nhật xong
      () => {
        console.log(this.state.count);
      }
    );
    // React update state có thể bất đồng bộ => nếu log giá trị của state sau khi gọi hàm setState thì không thể lấy được giá trị mới của state
    console.log(this.state.count);
  };

  decrease = () => {
    // VD: this.state.count = 4
    // Vì setState là bất đồng bộ, nên 2 lệnh này chạy cùng lúc với nhau và giá trị this.state.count của 2 lệnh đều như nhau => hàm setState cho sum sẽ dùng giá trị của state count trước khi được thay đổi
    // this.setState({ count: this.state.count - 1 });
    // this.setState({ sum: this.state.sum + this.state.count });

    // Để khắc phục ta sẽ gọi hàm setState và truyền vào tham số đầu là 1 callback function có params là state
    // state trong callback function luôn luôn là mới nhất
    this.setState((state) => {
      return {
        count: state.count - 1,
      };
    });
    this.setState((state) => {
      return {
        sum: state.sum + state.count,
      };
    });

    // => Kết luận: Khi setState nếu giá trị cần thay đổi không liên quan đến giá trị hiện tại của state, ta có thể dùng cách truyền vào 1 object để thay đổi (VD: state message), trường hợp cần sử dụng giá trị hiện tại của state để tính toán giá trị mới, ta nên dùng cách truyên vào 1 callback function
  };

  showMessage = () => {
    const value = prompt("Input your message:");
    this.setState({ message: value });
  };

  render() {
    return (
      <div>
        <h1>State</h1>
        <p>Count: {this.state.count}</p>
        <p>Sum: {this.state.sum}</p>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>

        <br />
        <br />

        <p>Message: {this.state.message}</p>
        <button onClick={this.showMessage}>Show message</button>

        <br />
        <br />

        <h1>Bài tập Car</h1>
        <Car />
      </div>
    );
  }
}
