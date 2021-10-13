import React, { useRef } from "react";
import "./cart-dropdown.styles.scss";
import CustomBtn from "../Custom-button/customBtn";
import { connect } from "react-redux";
import CartItems from "./cartItems";
import { useHistory } from "react-router";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../Redux/Cart/cart.selectors";
import useOnClickOutside from "../../hooks/use-outside-click";
import { toggleCart } from "../Redux/Cart/cart.actions";

const CartDropdown = ({ cart, toggleCart }) => {
  const history = useHistory();
  const ref = useRef();
  useOnClickOutside(ref, () => {
    if (cart.visible) toggleCart();
  });
  return (
    <div className="cart-dropdown" ref={ref}>
      <div className="cart-items">
        {cart.cartItems < 1 ? (
          <div className="empty-cart-text text-center">
            <span>Your cart is empty</span>
          </div>
        ) : (
          cart.cartItems.map((item) => <CartItems key={item.id} item={item} />)
        )}
      </div>

      <div className="btn">
        <CustomBtn
          onClick={() => history.push("/checkout")}
          variant="inverted"
          block
        >
          {"go to checkout".toUpperCase()}
        </CustomBtn>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cart: selectCartItems,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
