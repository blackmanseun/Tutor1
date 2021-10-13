import React from "react";
import { connect } from 'react-redux'
import './cartItems.styles.scss'
import { AiFillCloseCircle } from 'react-icons/ai'
import { remove } from "../Redux/Cart/cart.actions";
const CartItems = ({item, remove}) =>{
    let quantity = item.quantity;
    return (
        <div className="cart">
            <div className="cart-image">
                <img src={item.imgUrl} alt="item" />
            </div>
            <div className="cart-details">
                <h3>
                    {item.name}
                </h3>
                <span>
                  {quantity}  x ₦{item.price}
                </span>
            </div>
                <div className="close" onClick={()=>{
                    remove(item)
                }}>
                <AiFillCloseCircle size={20}/>
                </div>
        </div>
    );
}
const mapDispatchToProps = (dispatch) =>({
    remove: item => dispatch(remove(item))
})
export default connect(null, mapDispatchToProps)(CartItems)