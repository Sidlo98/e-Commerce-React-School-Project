import actiontypes from "../actiontypes";

const initState = {
  user: {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    admin: null,
    orders: null,
    token: null,
  },
  loading: false,
  regError: null,
  loginError: null,
  orderError: null,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().user.set:
      return {
        ...state,
        user: action.payload,
      };
    case actiontypes().user.logout:
      return {
        ...state,
        user: {
          id: null,
          firstName: null,
          lastName: null,
          email: null,
          admin: null,
          orders: null,
          token: null,
        },
      };
    case actiontypes().user.regError:
      state.regError = action.payload;
      return state;

    case actiontypes().user.clearRegError:
      state.regError = null;
      return state;

    case actiontypes().user.loginError:
      state.loginError = action.payload;
      return state;

    case actiontypes().user.clearLoginError:
      state.loginError = null;
      return state;

    case actiontypes().user.orderError:
      state.orderError = action.payload;
      return state;

    case actiontypes().user.clearOrderError:
      state.orderError = null;
      return state;

    case actiontypes().user.loading:
      state.loading = action.payload;
      return state;

    default:
      return state;
  }
};

export default userReducer;
