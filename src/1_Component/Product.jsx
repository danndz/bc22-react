// Tạo 1 component Product với react functional component nội dung chứa card bootstrap

function Product() {
  return (
    <div className="card">
      <img
        height="300px"
        src="https://picsum.photos/200/300"
        alt="photos"
        className="card-img"
      />
      <div className="card-body">
        <h3 className="card-title">
          Cybersoft
        </h3>
      </div>
    </div>
  );
}

export default Product;
