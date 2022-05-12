// import React from "react";

// // html
// // <button class="btn btn-success" onclick="clickMe()">Click me</button>
// export default function HandlingEvent() {
//   const clickMe = () => {
//     alert("Clicked");
//   };

//   const showMessage = (name) => {
//     alert(`Hello ${name}`);
//   };

//   const handleChange = (evt) => {
//     // Khi 1 sự kiện xảy ra, JS luôn luôn trả về 1 đối tượng Event
//     // evt.target => trả ra element gốc phát sinh ra event
//     console.log(evt.target.value);
//   };

//   const handleBlur = (evt) => {
//     console.log(evt.target.value);
//   };

//   const handleSubmit = (evt) => {
//     // Để ngăn chặn hành vi reload page khi submit form của browser
//     evt.preventDefault();
//     console.log("submitted");
//   };

//   return (
//     <div>
//       <h1>Handling Event</h1>
//       <button className="btn btn-success" onClick={clickMe}>
//         Click me
//       </button>
//       <button
//         className="btn btn-success"
//         onClick={() => showMessage("Dan Nguyen")}
//       >
//         Show message
//       </button>

//       <br />
//       <br />

//       <input type="text" onChange={handleChange} onBlur={handleBlur} />

//       <form onSubmit={handleSubmit}>
//         <button className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// }

import React, { Component } from "react";

export default class HandlingEvent extends Component {
  clickMe = () => {
    alert("clicked");
  };

  showMessage = (name) => {
    alert(`Hello ${name}`);
  };

  handleChange = (evt) => {
    console.log(evt.target.value);
  };

  render() {
    return (
      <div>
        <h1>Handling Event</h1>
        <button className="btn btn-success" onClick={this.clickMe}>
          Click me
        </button>
        <button
          className="btn btn-success"
          onClick={() => this.showMessage("Dan Nguyen")}
        >
          Show message
        </button>

        <br />
        <br />

        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
}
