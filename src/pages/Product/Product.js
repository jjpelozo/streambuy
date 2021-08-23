import React, { useState } from "react";

import ColorChosser from "../../Components/ColorChosser";
import ItemCount from "../../Components/ItemCount";
import Button from "../../Components/Button";
import "./Product.css";

const Product = ({ discount, name, description, pic, price, width, top }) => {
  const [selectedColor, setSelectedColor] = useState("");

  const setColor = (color) => {
    setSelectedColor(color);
  };

  const talles = [
    { talle: 35 },
    { talle: 36 },
    { talle: 37 },
    { talle: 38 },
    { talle: 39 },
    { talle: 40 },
  ];

  return (
    <div className="prodCont" style={{ width: width, marginTop: top }}>
      <div className="prodSubCon">
        <div className="prodDetails">
          <div className="prodColors">
            <ColorChosser />
          </div>
          <img src={pic} alt="productPic" className="prodPic" />
          <div className="prodColors">
            <img src={pic} alt="productPic" className=" prodDetailsItem" />
            <img src={pic} alt="productPic" className=" prodDetailsItem" />
          </div>
        </div>
        <div className="prodInfo">
          <div className="prodName">{name}</div>
          <div className="prodPrice">${price}</div>
        </div>
        <div className="prodDesc">{description}</div>
        <div className="prodDisc">{discount}</div>
        <div className="prodSize">
          <span>Talles</span>
          <div className="prodTalles">
            {talles.map((talle) => (
              <div className="prodTalleItem">{talle.talle}</div>
            ))}
          </div>
          <div className="cartButton">
            <ItemCount />
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
