import React from "react";
import axios from "axios";

export default function UserList({ users, onSelect, onDeleteSuccess }) {
  const handleDelete = async (userId) => {
    // Gọi API xoá user bằng userId
    await axios({
      url: `https://625a732843fda1299a17d4e6.mockapi.io/api/users/${userId}`,
      method: "DELETE",
    });
    // Sau khi xoá thành công => dữ liệu chỉ mới thay đổi ở phía server
    // Để giao diện được cập nhật, ta cần gọi gọi tới prop onDeleteSuccess để component UserManagement chạy hàm handleDeleteSuccess (hàm này sẽ gọi lại hàm fetchUsers để call API và setState cho state users)
    onDeleteSuccess();
  };

  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Date of Birth</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.dateOfBirth}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => onSelect(user.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
