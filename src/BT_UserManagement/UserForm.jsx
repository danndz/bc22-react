import React, { Component } from "react";

export default class UserForm extends Component {
  constructor(props) {
    super(props);

    const { user } = props;

    this.state = {
      // object values lưu trữ giá trị của các input
      values: {
        firstname: user.firstname || "",
        lastname: user.lastname || "",
        email: user.email || "",
        address: user.address || "",
        dateOfBirth: user.dateOfBirth || "",
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

  handleSubmit = (event) => {
    event.preventDefault();
    const { user } = this.props;

    if (user.id) {
      // Cập nhật
      this.props.onSubmit({ ...this.state.values, id: user.id }, "update");
    } else {
      // Thêm mới
      // Gửi object values lên component cha để thêm vào danh sách users
      const id = Math.floor(Math.random() * 100);
      this.props.onSubmit({ ...this.state.values, id }, "add");
    }
  };

  render() {
    const { values } = this.state;
    const buttonText = this.props.user.id ? "Update" : "Add";

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
