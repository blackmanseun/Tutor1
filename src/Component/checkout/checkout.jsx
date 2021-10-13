import React from 'react'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../Redux/Cart/cart.selectors'
import { connect } from 'react-redux'
import  CheckoutItem  from '../CheckoutItem/CheckoutItem'
import './checkout.style.scss'
import { CheckoutHeader } from '../checkoutHeader/CheckoutHeader'
import Total from '../Total/Total'

const Checkout = ({cart}) => {
    return (
        <div className='checkout'>
            {
                cart.cartItems.length < 1 ? (
                    <div className="text-center empty-cart-text">
                       <h2>
                       {'Your cart is empty'.toUpperCase()}
                       </h2>
                    </div>
                ):(
                    <div>
                        <CheckoutHeader/>
                        {
                             cart.cartItems.map(item =>(
                                <CheckoutItem
                                key={item.id}
                                item={item}
                                />
                            ))
                            
                        }
                        <Total/>
                    </div>
                    
               )
            }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    cart: selectCartItems
})
export default connect(mapStateToProps)(Checkout)