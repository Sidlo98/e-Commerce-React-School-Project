const actiontypes = () => {
  return {
    products: {
      loading: "PRODUCTS_LOADING",
      success: "PRODUCTS_SUCCESS",
      error: "PRODUCTS_ERROR",
      set: "PRODUCTS_SET",
    },
    product: {
      loading: "PRODUCT_LOADING",
      success: "PRODUCT_SUCCESS",
      error: "PRODUCT_ERROR",
      clear: "PRODUCT_CLEAR",
      set: "PRODUCT_SET",
    },
    cart: {},
  };
};

export default actiontypes;
