import cartTypes from "./cart.types";

export const toggleCart =() =>({
    type: cartTypes.TOGGLE_CART
})

export const addItem = item => ({
    type: cartTypes.ADD_ITEM,
    payload: item
})
export const increaseItem = item=>({
    type: cartTypes.INCREASE,
    payload: item
})
export const decreaseItem = item =>({
    type: cartTypes.DECREASE,
    payload: item
})
export const remove = item =>({
    type: cartTypes.REMOVE,
    payload: item
})
export const total = item =>({
    type: cartTypes.TOTAL,
    payload: item
})