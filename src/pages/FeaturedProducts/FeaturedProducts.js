import React from "react";
import Product from "../Product/Product";

const FeaturedProducts = ({width,top}) => {
  const products = [
    {
      id: 1,
      name: "Zapatilla",
      img: "topper.jpg",
    },
    {
      id: 2,
      name: "Zapatilla",
      img: "topper.jpg",
    },
    {
      id: 3,
      name: "Zapatilla",
      img: "topper.jpg",
    },
    {
      id: 4,
      name: "Zapatilla",
      img: "topper.jpg",
    },
  ];
  return (
    <div className="prodCont" style={{ width:  width, marginTop: top }}>
      <div className="productsList">
        {products.map((product) => (
          <img src={product.img} alt="productPic" className="prodPic" />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
