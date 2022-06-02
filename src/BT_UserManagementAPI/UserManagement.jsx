import React, { Component } from "react";
import axios from "axios";
import UserForm from "./UserForm";
import UserList from "./UserList";
import SearchUser from "./SearchUser";

export default class UserManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      selectedUser: null,
      searchValue: "",
    };
  }

  // Viết hàm async gọi API và setState
  fetchUsers = async () => {
    try {
      const { data } = await axios({
        url: "https://625a732843fda1299a17d4e6.mockapi.io/api/users",
        method: "GET",
        params: {
          email: this.state.searchValue,
        },
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
    // setState selectedUser thành null sau khi cập nhật thành công
    if (this.state.selectedUser) {
      this.setState({ selectedUser: null });
    }
  };

  // Viết hàm nhận userId từ component UserList để đưa vào component UserForm
  handleSelect = (userId) => {
    // Làm sao để đưa userId xuống component UserForm???
    console.log(userId);
    this.setState({ selectedUser: userId });
  };

  // Viết hàm nhận search value từ component SearchUser
  handleSearch = (value) => {
    console.log(value);
    // Thay vì gọi trực tiếp hàm fetchUsers và truyền params vào, thì ở các lần thêm/xoá/cập nhật ta không thể giữ lại giá trị search để gọi API
    // => Ta cần lưu giá trị search vào state
    // this.fetchUsers(value);
    this.setState({ searchValue: value });
  };

  // phương thức tự động được khởi chạy khi component được khởi tạo
  componentDidMount() {
    // Gọi tới hàm call API và setState
    this.fetchUsers();
  }

  // phương thức tự động được khởi chạy sau lần render thứ 2 trở đi
  componentDidUpdate(prevProps, prevState) {
    // Giá trị state của searchValue thay đổi => Gọi lại API fetchUsers
    if (prevState.searchValue !== this.state.searchValue) {
      this.fetchUsers();
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">User Management</h1>
        <UserForm
          userId={this.state.selectedUser}
          onSubmitSuccess={this.handleSubmitSuccess}
        />
        <SearchUser onSearch={this.handleSearch} />
        <UserList
          users={this.state.users}
          onSelect={this.handleSelect}
          onDeleteSuccess={this.handleDeleteSuccess}
        />
      </div>
    );
  }
}
