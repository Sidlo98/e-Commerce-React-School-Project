import actiontypes from "../actiontypes";

const initState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartReducer = (state = initState, action) => {
  let cartIndex;
  switch (action.type) {
    case actiontypes().cart.add:
      cartIndex = state.cart.findIndex(
        (product) => product._id === action.payload.product._id
      );
      if (cartIndex === -1) {
        state.cart = [
          ...state.cart,
          { ...action.payload.product, quantity: action.payload.quantity },
        ];
      } else {
        state.cart[cartIndex].quantity += action.payload.quantity;
      }

      state.totalPrice = getTotalPrice(state.cart);
      state.totalQuantity = getTotalQuantity(state.cart);

      return state;

    case actiontypes().cart.remove:
      cartIndex = state.cart.findIndex(
        (product) => product._id === action.payload._id
      );
      if (cartIndex !== -1) {
        if (state.cart[cartIndex].quantity === 1) {
          state.cart = state.cart.filter(
            (product) => product._id !== action.payload._id
          );
        } else {
          state.cart[cartIndex].quantity--;
        }
      }

      state.totalPrice = getTotalPrice(state.cart);
      state.totalQuantity = getTotalQuantity(state.cart);

      return state;

    case actiontypes().cart.delete:
      state.cart = state.cart.filter(
        (product) => product._id !== action.payload._id
      );

      state.totalPrice = getTotalPrice(state.cart);
      state.totalQuantity = getTotalQuantity(state.cart);

      return state;

    default:
      return state;
  }
};

const getTotalQuantity = (cart) => {
  let total = 0;
  cart.forEach((product) => {
    total += product.quantity;
  });
  return total;
};

const getTotalPrice = (cart) => {
  let total = 0;
  cart.forEach((product) => {
    total += product.price * product.quantity;
  });
  return total;
};

export default cartReducer;
