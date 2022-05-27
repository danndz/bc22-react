// Khái niệm lifecycle chỉ tồn tại ở class component
import React, { Component } from "react";
import Welcome from "./Welcome";

// Vòng đời của một component gồm 3 giai đoạn:
/*
 * MOUNTING: Component được khởi tạo
 *  constructor -> render -> componentDidMount
 *
 * UPDATING: Props hoặc State thay đổi hoặc component cha bị re-render
 *  render -> componentDidUpdate
 *
 * UNMOUNTING: Trước khi component bị huỷ
 *  componentWillUnmount
 */

export default class Lifecycle extends Component {
  // constructor là phương thức đầu tiên được tự động khởi chạy khi component được khởi tạo
  // constructor thường dùng để khởi tạo state
  constructor(props) {
    super(props);

    console.log("constructor run");
    this.state = {
      data: null, // state chứa data trả về từ API
      message: "",
    };
  }

  // componentDidMount là phương thức ba tự động được khởi chạy khi component được khởi tạo
  // componentDidMount thường dùng để thực hiện side effect: Call API, setTimeout, setInterval, hoặc tương tác với DOM
  componentDidMount() {
    console.log("componentDidMount run");

    // Giả lập thao tác gọi API
    setTimeout(() => {
      // data trả về từ API
      const data = [
        { id: 1, name: "Dan" },
        { id: 2, name: "Nguyen" },
      ];
      // Sau khi có data trả về từ API, gọi setState để gán data cho state
      this.setState({ data });
    }, 2000);
  }

  // componentDidUpdate là phương thức tự động được khởi chạy từ lần render thứ hai trở đi (chạy sau phương thức render)
  // componentDidUpdate thường dùng để sau khi props hoặc state thay đổi ta cần thực hiện một hành động nào đó, ví dụ:
  // - props thay đổi => set lại state cho component
  // - props hoặc state thay đổi => call API để lấy data mới => set lại state cho component
  // componentDidUpdate nhận vào 2 tham số là giá trị trước khi thay đổi của props và state, thường được dùng để làm điều kiện trước khi setState, hoặc call API
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate run");

    // * Lưu ý: Khi muốn setState trong componentDidUpdate phải có điều kiện (if) để tránh bị lặp vô tận
    // if (prevState.search !== this.state.search) {
    //   call API lấy data mới
    //   this.setState({data});
    // }
  }

  addMessage = () => {
    const message = prompt("Input your message:");
    this.setState({ message });
  };

  clearMessage = () => {
    this.setState({ message: "" });
  };

  // render là phương thức thứ hai tự động được khởi chạy khi component được khởi tạo
  // render dùng để return về jsx hiển thị ra giao diện
  render() {
    console.log("render run");

    if (!this.state.data) return null;

    return (
      <div>
        <h1>Users</h1>
        {this.state.data.map((item) => {
          return (
            <p key={item.id}>
              ID: {item.id} - Name: {item.name}
            </p>
          );
        })}

        <button className="btn btn-success" onClick={this.addMessage}>
          Add Message
        </button>
        <button className="btn btn-danger" onClick={this.clearMessage}>
          Clear Message
        </button>
        {/* Nếu state message có data thì mới cho render component Welcome */}
        {this.state.message && <Welcome message={this.state.message} />}
      </div>
    );
  }
}
