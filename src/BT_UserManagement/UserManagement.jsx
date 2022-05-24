import React, { Component } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

export default class UserManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 1,
          firstname: "Khai",
          lastname: "Truong",
          email: "khai@gmail.com",
          address: "Q7",
          dateOfBirth: "01/02/1992",
        },
        {
          id: 2,
          firstname: "Hieu",
          lastname: "Dang",
          email: "hieu@gmail.com",
          address: "Q7",
          dateOfBirth: "05/06/1995",
        },
      ],

      // updatedUser: lưu trữ thông tin user muốn cập nhật và truyền xuống cho component UserForm
      updatedUser: {},
    };
  }

  handleSubmit = (user, type) => {
    if (type === "add") {
      this.setState((state) => ({
        users: [...state.users, user],
      }));
    }

    if (type === "update") {
      const users = this.state.users.map((item) => {
        // Duyệt mảng và kiểm tra nếu phần tử trong mảng có id trùng với id của user muốn cập nhật => return về object user muốn cập nhật
        if (item.id === user.id) {
          return user;
        }
        // Ngược lại return về item là không thay đổi gì hết
        return item;
      });
      this.setState({ users, updatedUser: {} });
    }
  };

  handleDelete = (userId) => {
    console.log(userId);
    const users = this.state.users.filter((user) => user.id !== userId);
    this.setState({ users });
  };

  handleUpdate = (user) => {
    console.log(user);
    this.setState({ updatedUser: user });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">User Management</h1>

        {/* Khi prop key thay đổi giá trị, React sẽ huỷ và tạo mới lại component */}
        <UserForm
          key={this.state.updatedUser.id}
          user={this.state.updatedUser}
          onSubmit={this.handleSubmit}
        />

        <UserList
          users={this.state.users}
          onDelete={this.handleDelete}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}
