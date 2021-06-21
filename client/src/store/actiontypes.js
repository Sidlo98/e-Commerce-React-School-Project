const actiontypes = () => {
  return {
    products: {
      loading: "PRODUCTS_LOADING",
      error: "PRODUCTS_ERROR",
      set: "PRODUCTS_SET",
    },
    product: {
      loading: "PRODUCT_LOADING",
      error: "PRODUCT_ERROR",
      clear: "PRODUCT_CLEAR",
      set: "PRODUCT_SET",
    },
    cart: {
      add: "CART_ADD",
      remove: "CART_REMOVE",
      delete: "CART_DELETE",
      clear: "CART_CLEAR",
    },
    user: {
      login: "USER_LOGIN",
      logout: "USER_LOGOUT",
      loading: "USER_LOADING",
      clearRegError: "USER_CLEAR_REG_ERROR",
      regError: "USER_REG_ERROR",
    },
  };
};

export default actiontypes;
