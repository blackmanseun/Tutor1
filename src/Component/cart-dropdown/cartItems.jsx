import React from "react";
import './cartItems.styles.scss'
import { AiFillCloseCircle } from 'react-icons/ai'
const CartItems = ({item}) =>{
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
                  {quantity}  x {item.price}
                </span>
            </div>
                <div className="close">
                <AiFillCloseCircle size={20}/>
                </div>
        </div>
    );
}

export default CartItems