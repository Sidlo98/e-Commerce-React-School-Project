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
      set: "USER_SET",
      logout: "USER_LOGOUT",

      loginError: "USER_LOGIN_ERROR",
      clearLoginError: "USER_CLEAR_LOGIN_ERROR",

      regError: "USER_REG_ERROR",
      clearRegError: "USER_CLEAR_REG_ERROR",

      orderError: "USER_ORDER_ERROR",
      clearOrderError: "USER_ORDER_CLEAR_ORDER_ERROR",

      loading: "USER_LOADING",
    },
  };
};

export default actiontypes;
