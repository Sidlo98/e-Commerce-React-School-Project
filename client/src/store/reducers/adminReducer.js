import actiontypes from "../actiontypes";

const initState = {
  users: [],
};

const adminReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().admin.setUsers:
      state.users = action.payload;
      return state;

    default:
      return state;
  }
};

export default adminReducer;
