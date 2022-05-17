import React, { Component } from "react";

export default class ConditionalRendering extends Component {
  state = {
    isLoggedIn: false, // chưa đăng nhập
    messages: ["React", "Angular", "Vue"],
  };

  // toggle login/logout
  toggle = () => {
    this.setState((state) => ({ isLoggedIn: !state.isLoggedIn }));
  };

  // xoá messages
  clearMessage = () => {
    this.setState({ messages: [] });
  };

  render() {
    // Thiết kế giao diện đã đăng nhập
    if (this.state.isLoggedIn) {
      return (
        <div>
          <h1>Welcome black!!!</h1>
          {/* Render true false bằng toán tử bậc 3 */}
          {/* {this.state.messages.length ? (
            <div>
              <span>You have {this.state.messages.length} messages unread</span>
              <button onClick={this.clearMessage}>Clear</button>
            </div>
          ) : (
            <p>No messages found</p>
          )} */}
          {/* Nếu chỉ muốn render điều kiện đúng */}
          {!!this.state.messages.length && (
            <div>
              <span>You have {this.state.messages.length} messages unread</span>
              <button onClick={this.clearMessage}>Clear</button>
            </div>
          )}
          <button onClick={this.toggle}>Logout</button>
        </div>
      );
    }

    // Thiết kế giao diện khi chưa đăng nhập
    return (
      <div>
        <h1>Please login!!!</h1>
        <button onClick={this.toggle}>Login</button>
      </div>
    );
  }
}
