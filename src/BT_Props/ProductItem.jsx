import React from "react";

export default function ProductItem(props) {
  const { product } = props;

  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
        className="card-img"
        width="100%"
        height="300px"
      />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.shortDescription}</p>
      </div>
    </div>
  );
}
