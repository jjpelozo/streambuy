import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const onAdd = () => {
    setCount(count + 1);
  };

  const onSubtract = () => {
    setCount(count - 1);
  };

  return (
    <div className="itemCount">
      <p>Agergar al carrito</p>
      <div className=" itemCountButtons">
        <div className="itemCountButton" onClick={onAdd}>
          +
        </div>
        <input type="number" value={count} />
        <div className="itemCountButton" onClick={onSubtract}>
          -
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
