import actiontypes from "../actiontypes";

const initState = {
  product: {},
  loading: false,
  error: "",
  success: "",
};

const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().product.set:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
