import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./cartIcon.styles.scss";

const CartIcon = () => {
  let number = 4;
  return (
    <div className="cartIcon">
      <AiOutlineShoppingCart size={20} />
      {
          number > 0?(
          <span>{number}</span>): '' }
    </div>
  );
};

export default CartIcon;
