import cartTypes from "./cart.types"

const INITIAL_STATE ={
    visible: false,
    cartItems: []
}

const cartReducer =(state = INITIAL_STATE, action) =>{
    switch(action.type){
        case cartTypes.SHOW_CART:
        return{
            ...state, 
            visible: true
        }
        case cartTypes.TOGGLE_CART:
        return{
            ...state,
            visible: !state.visible
        }
        case cartTypes.ADD_ITEM:
            return{
                ...state, 
                cartItems: [...state.cartItems, action.payload]
            }
        default:
            return state
    }
}
export default cartReducer
