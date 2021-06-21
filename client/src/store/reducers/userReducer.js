import actiontypes from "../actiontypes";

const initState = {
  user: {},
  loading: false,
  regError: "",
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().user.login:
      return {
        ...state,
        user: action.payload,
      };
    case actiontypes().user.regError:
      state.regError = action.payload;
      return state;
    case actiontypes().user.clearRegError:
      state.regError = "";
      return state;
    default:
      return state;
  }
};

export default userReducer;
