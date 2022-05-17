import React from "react";
import Welcome from "./Welcome";
import Product from "./Product";
import Callback from "./Callback";

export default function Props() {
  const product = {
    name: "Oppo Find X5 Pro",
    desc: "Oppo Find X5 Pro",
    img: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x5-pro-en/navigation/findx5-pro-white-navigation-v2.png.thumb.webp",
  };

  // funtion này chỉ được chạy khi component gọi tới prop onClick
  // Đây là kĩ thuật để truyền dữ liệu từ component con lên component cha
  const handleClick = (value) => {
    alert(value);
  };

  return (
    <div>
      <h1>Props</h1>
      <Welcome />
      <Welcome name="Khai Truong" />
      <Welcome name="Nguyen Dinh" />
      <div className="w-25">
        <Product
          name="Iphone 13 Pro Max"
          desc="Iphone 13 Pro Max"
          img="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-la-thumb-600x600.jpg"
        />
        <Product
          name="Samsung galaxy S22 Ultra"
          desc="Samsung galaxy S22 Ultra"
          img="https://cdn.tgdd.vn/Products/Images/42/271697/Galaxy-S22-Ultra-Green-600x600.jpg"
        />
        <Product name={product.name} desc={product.name} img={product.img} />
        {/* Liệt kê tất cả key có trong object product và khai báo thành props truyền vào component Product */}
        <Product {...product} />
      </div>
      <Callback onClick={handleClick} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
