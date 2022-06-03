import React, { useState, useEffect } from "react";
import axios from "axios";

const UserForm = ({ user, onSubmitSuccess }) => {
  // Tạo state values để quản lý giá trị của các inputs
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    dateOfBirth: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      if (user) {
        await axios({
          url: `https://629757b414e756fe3b2dc8f0.mockapi.io/api/users/${user.id}`,
          data: values,
          method: "PUT",
        });
      } else {
        await axios({
          url: "https://629757b414e756fe3b2dc8f0.mockapi.io/api/users",
          data: values,
          method: "POST",
        });
      }

      // Thêm/Cập nhật thành công, tuy nhiên hiện data chỉ được thay đổi ở phía server
      // Để giao diện cập nhật ta cần phải thông báo cho component UserManagement gọi lại hàm fetchUsers để call API mới và cập nhật state bằng cách gọi tới hàm onSubmitSuccess
      onSubmitSuccess();
      setValues({
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        dateOfBirth: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues((values) => ({ ...values, [name]: value }));
  };

  // useEffect sẽ được chạy khi prop user thay đổi, ta set state values bằng prop user
  useEffect(() => {
    setValues({ ...user });
  }, [user]);

  const buttonText = user ? "Update" : "Add";
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={values.firstname}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={values.lastname}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={values.address}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="text"
              id="dateOfBirth"
              name="dateOfBirth"
              className="form-control"
              value={values.dateOfBirth}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <button className="btn btn-primary">{buttonText}</button>
    </form>
  );
};

export default UserForm;
