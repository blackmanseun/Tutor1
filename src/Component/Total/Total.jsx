import React from "react";
import "./total.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../Redux/Cart/cart.selectors";

const Total = ({ cart }) => {
  return (
    <div className="total">
      Total:
      <span>₦{cart.total}</span>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cart: selectCartItems,
});
export default connect(mapStateToProps)(Total);
