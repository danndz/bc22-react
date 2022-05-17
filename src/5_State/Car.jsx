import React, { Component } from "react";

export default class Car extends Component {
  state = {
    imgCar: "/img/black-car.jpg",
  };

  changeCar = (color) => {
    // Xử lý khi user click vào icon sẽ đổi màu xe tương ứng
    this.setState({ imgCar: `/img/${color}-car.jpg` });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <img src={this.state.imgCar} alt="car" width="100%" />
          </div>
          <div className="col-sm-4">
            <div
              className="d-flex mb-4 align-items-center"
              onClick={() => this.changeCar("black")}
            >
              <img src="/img/icon-black.jpg" alt="black" width="50px" />
              <h4 className="ml-4">Black</h4>
            </div>
            <div
              className="d-flex mb-4 align-items-center"
              onClick={() => this.changeCar("red")}
            >
              <img src="/img/icon-red.jpg" alt="red" width="50px" />
              <h4 className="ml-4">Red</h4>
            </div>
            <div
              className="d-flex mb-4 align-items-center"
              onClick={() => this.changeCar("silver")}
            >
              <img src="/img/icon-silver.jpg" alt="silver" width="50px" />
              <h4 className="ml-4">Silver</h4>
            </div>
            <div
              className="d-flex mb-4 align-items-center"
              onClick={() => this.changeCar("steel")}
            >
              <img src="/img/icon-steel.jpg" alt="steel" width="50px" />
              <h4 className="ml-4">Steel</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
