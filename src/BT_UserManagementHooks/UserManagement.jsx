import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./UserForm";
import UserList from "./UserList";

const UserManagement = () => {
  // Tạo state lưu trữ danh sách người dùng
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // Viết hàm async gọi API và setState cho users
  const fetchUsers = async () => {
    try {
      const { data } = await axios({
        url: "https://629757b414e756fe3b2dc8f0.mockapi.io/api/users",
        method: "GET",
      });
      // Gọi API thành công set data từ API cho state users
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Dựa vào userId call API get user detail
  const handleSelect = async (userId) => {
    try {
      const { data } = await axios({
        url: `https://629757b414e756fe3b2dc8f0.mockapi.io/api/users/${userId}`,
        method: "GET",
      });
      // Gọi API thành công set data từ API cho state selectedUser
      setSelectedUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitSuccess = () => {
    fetchUsers();
    setSelectedUser(null);
  };

  // Viết useEffect để call API
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">User Management</h1>
      <UserForm user={selectedUser} onSubmitSuccess={handleSubmitSuccess} />
      <UserList
        users={users}
        onSelect={handleSelect}
        onDeleteSuccess={fetchUsers}
      />
    </div>
  );
};

export default UserManagement;
