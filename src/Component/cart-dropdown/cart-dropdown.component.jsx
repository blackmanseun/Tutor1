import React from "react";
import "./cart-dropdown.styles.scss";
import CustomBtn from "../Custom-button/customBtn";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />

      <div className="btn">
        <CustomBtn>{"go to checkout".toUpperCase()}</CustomBtn>
      </div>
    </div>
  );
};
export default CartDropdown;
