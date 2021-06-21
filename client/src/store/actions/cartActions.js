import actiontypes from "../actiontypes";

export const addProductToCart = (product, quantity) => {
  return {
    type: actiontypes().cart.add,
    payload: {
      product,
      quantity,
    },
  };
};

export const removeProductFromCart = (product) => {
  return {
    type: actiontypes().cart.remove,
    payload: product,
  };
};

export const deleteProductFromCart = (product) => {
  return {
    type: actiontypes().cart.delete,
    payload: product,
  };
};
