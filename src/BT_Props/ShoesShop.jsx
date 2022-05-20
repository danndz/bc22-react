import React, { Component } from "react";
import data from "./data.json";
import ProductList from "./ProductList";

export default class ShoesShop extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Shoes Shop</h1>
        <ProductList products={data} />
      </div>
    );
  }
}




