import React from "react";
import "./Product.css";

const Product = ({ discount, name, description, pic, price, width, top }) => {
  const talles = [
    { talle: 35 },
    { talle: 36 },
    { talle: 37 },
    { talle: 38 },
    { talle: 39 },
    { talle: 35 },
  ];
  

  return (
    <div className="prodCont" style={{ width: width, marginTop: top }}>
      <div className="prodSubCon">
        <img src={pic} alt="productPic" className="prodPic" />
        <div className="prodDetails">
          <img src={pic} alt="productPic" className="prodPic prodDetailsItem" />
          <img src={pic} alt="productPic" className="prodPic prodDetailsItem" />
          <img src={pic} alt="productPic" className="prodPic prodDetailsItem" />
        </div>
        <div className="prodSize" >
            <p>Talles</p>
            <div className="prodTalles">
            {talles.map((talle)=>(
                <div className="prodTalleItem">{talle.talle}</div>
            ))}

            </div>
        </div>
        <div className="prodInfo">
          <div className="prodPrice">${price}</div>
          <div className="prodName">{name}</div>
          <div className="prodDesc">{description}</div>
          <div className="prodDisc">{discount}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
