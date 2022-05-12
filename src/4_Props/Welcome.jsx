import React from "react";
import PropTypes from "prop-types";

// props là 1 object chứa data từ component cha truyền xuống
// export default function Welcome(props) {
//   console.log(props);
//   return <div>Welcome {props.name}</div>;
// }
export default class Welcome extends React.Component {
  render() {
    // Class component cung cấp 1 object props chứa data từ component cha truyền xuống
    console.log(this.props);
    return <div>Welcome {this.props.name}</div>;
  }
}

// Khai báo giá trị mặc định của props
// Nếu component được gọi mà không được truyền giá trị props thì nó sẽ sử dụng giá trị của defaultProps
Welcome.defaultProps = {
  name: "Peter",
};

// Validate kiểu dữ liệu của props
Welcome.propTypes = {
  name: PropTypes.string,
};
