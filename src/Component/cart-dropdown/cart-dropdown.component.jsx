import React from "react";
import "./cart-dropdown.styles.scss";
import CustomBtn from "../Custom-button/customBtn";
import { connect } from 'react-redux'
import CartItems from "./cartItems";
import { useHistory } from "react-router";
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from "../Redux/Cart/cart.selectors";

const CartDropdown = ({cart}) => {
 const history =  useHistory()
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

        <CustomBtn onClick={()=> history.push('/checkout')} variant="inverted" block>{"go to checkout".toUpperCase()}</CustomBtn>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cart: selectCartItems
})
export default connect(mapStateToProps)(CartDropdown);
