import cartTypes from "./cart.types";

const INITIAL_STATE = {
  visible: false,
  cartItems: [],
  total: 0
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.SHOW_CART:
      return {
        ...state,
        visible: true,
      };
    case cartTypes.TOGGLE_CART:
      return {
        ...state,
        visible: !state.visible,
      };
    case cartTypes.ADD_ITEM:
      const exists = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (exists) {
        const cartItems = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return { ...state, cartItems };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    case cartTypes.INCREASE: {
      const cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return { ...state, cartItems };
    }
    case cartTypes.DECREASE: {
      const cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: Math.max(item.quantity - 1, 1) };
        }
        return item;
      });
      return { ...state, cartItems };
    }
    case cartTypes.REMOVE: {
      const cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      return { ...state, cartItems };
    }
    case cartTypes.TOTAL:{
      const total = state.cartItems.reduce((currentTotal, item)=>{
        return item.price * item.quantity + currentTotal
      }, 0);
      return {...state, total}
    }
    default:
      return state;
  }
};
export default cartReducer;
