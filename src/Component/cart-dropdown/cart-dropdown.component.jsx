import React from "react";
import "./cart-dropdown.styles.scss";
import CustomBtn from "../Custom-button/customBtn";
import { connect } from 'react-redux'
import CartItems from "./cartItems";

const CartDropdown = ({cart}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">

    {
      cart.cartItems.map((item)=>(
       <CartItems
        key={item.id}
        item={item}
       />
      ))
    }
      </div>

      <div className="btn">
        <CustomBtn block>{"go to checkout".toUpperCase()}</CustomBtn>
      </div>
    </div>
  );
};
const mapStateToProps =({cart}) =>({
  cart
})
export default connect(mapStateToProps)(CartDropdown);
