import React, { Component, createRef } from "react";

export default class SearchUser extends Component {
  constructor(props) {
    super(props);

    this.searchRef = createRef();
  }

  handleSearch = () => {
    const value = this.searchRef.current.value;
    console.log(value);
    this.props.onSearch(value);
  };

  render() {
    return (
      <div className="flex justify-content-end form-inline">
        <input
          type="text"
          ref={this.searchRef}
          className="form-control"
          placeholder="Search Email"
        />
        <button className="btn btn-success" onClick={this.handleSearch}>
          Search
        </button>
      </div>
    );
  }
}
