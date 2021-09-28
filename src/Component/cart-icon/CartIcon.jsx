import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { connect } from 'react-redux'

import "./cartIcon.styles.scss";

const CartIcon = ({cart}) => {
  let number = cart.cartItems.length;
  return (
    <div className="cartIcon">
      <AiOutlineShoppingCart size={20} />
      {
          number > 0?(
          <span>{number}</span>): '' }
    </div>
  );
};
const mapStateToProps = ({cart}) =>({
  cart
})

export default connect(mapStateToProps)(CartIcon);
