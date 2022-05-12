import React from "react";
import PropTypes from "prop-types";

// Component Product khi được sử dụng sẽ nhận được 3 props là: name, desc, img
// <Product name="Iphone 13" desc="bla bla bla" img="https://" />
export default function Product(props) {
  const { name, desc, img } = props;
  return (
    <div className="card">
      <img src={img} alt={name} width="100%" className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};











