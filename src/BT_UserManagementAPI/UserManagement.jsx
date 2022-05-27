import React, { Component } from "react";
import axios from "axios";
import UserForm from "./UserForm";
import UserList from "./UserList";

export default class UserManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  // Viết hàm async gọi API và setState
  fetchUsers = async () => {
    try {
      const { data } = await axios({
        url: "https://625a732843fda1299a17d4e6.mockapi.io/api/users",
        method: "GET",
      });
      // Nhận được data từ API => setState cho users
      this.setState({ users: data });
    } catch (error) {
      console.log(error);
    }
  };

  // Viết hàm xử lý sau khi xoá user thành công và truyền xuống component UserList
  handleDeleteSuccess = () => {
    // Gọi lại hàm fetchUsers để lấy data mới từ API và setState users
    this.fetchUsers();
  };

  // Viết hàm xử lý sau khi thêm user thành công và truyền xuống component UserForm
  handleSubmitSuccess = () => {
    // Gọi lại hàm fetchUsers để lấy data mới từ API và setState users
    this.fetchUsers();
  };

  // phương thức tự động được khởi chạy khi component được khởi tạo
  componentDidMount() {
    // Gọi tới hàm call API và setState
    this.fetchUsers();
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">User Management</h1>
        <UserForm onSubmitSuccess={this.handleSubmitSuccess} />
        <UserList
          users={this.state.users}
          onDeleteSuccess={this.handleDeleteSuccess}
        />
      </div>
    );
  }
}
