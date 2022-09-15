import React, { useState } from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState(true)
  // const [cartClass, setCartClass] = useState(false)

  function handleClick (e) {
    console.log(e.target)
    setCart(!cart)
    // setCartClass((cartClass) => !cartClass)
  }

  return (
    <li className={cart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cart ? 'Add to Cart' : 'Remove from Cart'}</button>
    </li>
  );
}

export default Item;
