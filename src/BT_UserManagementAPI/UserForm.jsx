import React, { Component } from "react";
import axios from "axios";

export default class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // object values lưu trữ giá trị của các input
      values: {
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        dateOfBirth: "",
      },
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    // name: fistname | lastname | email | address | dateOfBirth

    this.setState((state) => ({
      values: {
        ...state.values, // sao chép lại các giá trị hiện tại có trong object values
        [name]: value, // ghi đè lại giá trị của 1 property trong object values
      },
    }));
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { userId } = this.props;

    try {
      if (userId) {
        // Call API cập nhật user
        await axios({
          url: `https://625a732843fda1299a17d4e6.mockapi.io/api/users/${userId}`,
          data: this.state.values,
          method: "PUT",
        });
      } else {
        // Call API thêm user
        await axios({
          url: "https://625a732843fda1299a17d4e6.mockapi.io/api/users",
          data: this.state.values,
          method: "POST",
        });
      }
      // Thêm/Cập nhật thành công, tuy nhiên hiện data chỉ được thay đổi ở phía server
      // Để giao diện cập nhật ta cần phải thông báo cho component UserManagement gọi lại hàm fetchUsers để call API mới và cập nhật state bằng cách gọi tới prop onSubmitSuccess
      this.props.onSubmitSuccess();
      // Reset lại form
      this.setState({
        values: {
          firstname: "",
          lastname: "",
          email: "",
          address: "",
          dateOfBirth: "",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  fetchUser = async () => {
    try {
      const { data } = await axios.get(
        `https://625a732843fda1299a17d4e6.mockapi.io/api/users/${this.props.userId}`
      );
      // Call API thành công
      this.setState({
        values: { ...data },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Khi props hoặc state thay đổi, sau khi render, hàm componentDidUpdate sẽ tự động được thực thi
  componentDidUpdate(prevProps, prevState) {
    // Kiểm tra prop userId có value VÀ giá trị cũ và mới khác nhau
    if (this.props.userId && prevProps.userId !== this.props.userId) {
      // Gọi hàm fetchUser để call API và setState
      this.fetchUser();
    }
  }

  render() {
    const { values } = this.state;
    const buttonText = this.props.userId ? "Update" : "Add";

    return (
      <form onSubmit={this.handleSubmit}>
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <button className="btn btn-primary">{buttonText}</button>
      </form>
    );
  }
}
