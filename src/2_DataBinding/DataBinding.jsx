// import React from "react";

// export default function DataBinding() {
//   let message = "Hello Cybersoft";
//   let student = {
//     name: "Tèo",
//     email: "teo@gmail.com",
//   };

//   const showInfo = () => {
//     // return về jsx
//     return <h3>Hello {student.name} - {student.email}</h3>
//   };
//   return (
//     <div>
//       <h1>{message}</h1>
//       <p>{student.name}</p>
//       <p>{student.email}</p>
//       {/* Gọi hàm */}
//       {showInfo()}
//     </div>
//   );
// }

// rcc
import React, { Component } from "react";

export default class DataBinding extends Component {
  student = {
    name: "Tí",
    email: "ti@gmail.com",
  };

  showInfo = () => {
    return <h3>Hello {this.student.name}</h3>;
  };
  render() {
    let message = "Hello BC22";
    return (
      <div>
        <h1>{message}</h1>
        <p>{this.student.name}</p>
        <p>{this.student.email}</p>
        {this.showInfo()}
      </div>
    );
  }
}
