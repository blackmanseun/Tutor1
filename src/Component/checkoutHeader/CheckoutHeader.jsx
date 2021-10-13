import React from 'react'
import './checkoutHeader.style.scss'

export const CheckoutHeader = () => {
    return (
        <div className="checkout-header">
            <div>Product</div>
            <div>Description</div>
            <div>Quantity</div>
            <div>Price</div>
            <div>Remove</div>
           <hr />
        </div>
    )
}
