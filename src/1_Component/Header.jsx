// Tạo 1 component Header với react class component chứa tiêu đề là cyberlearn.vn

import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div
        className="p-4 bg-secondary"
      >
        <h1 className="text-white">
          Cyberlearn.vn
        </h1>
      </div>
    );
  }
}

export default Header;
