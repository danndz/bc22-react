import React, { Component, createRef } from "react";

export default class Refs extends Component {
  constructor(props) {
    super(props);

    // Khi muốn DOM tới 1 element, ta dùng hàm createRef: this.elementRef = createRef()
    // Sau đó ở element ta gọi sử dụng bằng cách khai báo: ref={this.elementRef}
    this.inputRef = createRef();
    this.fileRef = createRef();
  }

  componentDidMount() {
    console.log(this.inputRef.current);
    this.inputRef.current.focus();
  }

  handleSubmit = () => {
    // Làm thể nào để lấy được giá trị hiện tại của input
    alert(this.inputRef.current.value);
  };

  handleChangeImg = (evt) => {
    // Đối với input type="file" để lấy được file mà user vừa select ta sử dụng:
    console.log(this.fileRef.current.files);
    // console.log(evt.target.files);
  };

  render() {
    return (
      <div>
        <h1>Refs</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleSubmit}>Submit</button>

        <br />
        <br />
        <br />

        <input
          type="file"
          hidden
          ref={this.fileRef}
          onChange={this.handleChangeImg}
        />
        <button onClick={() => this.fileRef.current.click()}>
          Select your file
        </button>
      </div>
    );
  }
}
