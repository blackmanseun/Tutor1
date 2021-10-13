import React from "react";
import {
  AiFillCloseCircle,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { decreaseItem, increaseItem, remove, total } from "../Redux/Cart/cart.actions";
import "./checkoutItem.styles.scss";
import { connect } from 'react-redux'

 const CheckoutItem = ({ item, increaseItem, decreaseItem, remove, total }) => {
  return (
    <div className="checkout-item">
      <div className="">
        <img src={item.imgUrl} alt={item.name} width="100%" />
      </div>
      <div>{item.name}</div>
      <div className="quantity-control">
        <button
          onClick={() => {
             decreaseItem(item);
             total(item);
          }}
        >
          <AiOutlineMinus />
        </button>
        <div className="quantity-number">{item.quantity}</div>
        <button onClick={()=>{
            increaseItem(item);
            total(item);
        }}>
          <AiOutlinePlus />
        </button>
      </div>
      <div>₦{item.price}</div>
      <div className="close" onClick={()=>{
          remove(item);
          total(item);
      }}>
        <AiFillCloseCircle size={20} />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch)=>({
    increaseItem: item => dispatch(increaseItem(item)),
    decreaseItem: item => dispatch(decreaseItem(item)),
    remove: item => dispatch (remove(item)),
    total: item => dispatch(total(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);