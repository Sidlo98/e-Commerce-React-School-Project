import actiontypes from "../actiontypes";

const initState = {
  users: [],
  loading: false,
};

const adminReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().admin.setUsers:
      state.users = action.payload;
      return state;

    case actiontypes().admin.updateOrders:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user._id === action.payload.userId) {
            return {
              ...user,
              orders: action.payload.orders,
              isUpdated: true,
            };
          } else {
            return user;
          }
        }),
      };

    case actiontypes().admin.hasBeenSaved:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user._id === action.payload) {
            return {
              ...user,
              isUpdated: false,
            };
          } else {
            return user;
          }
        }),
      };

    case actiontypes().admin.loading:
      return {
        ...state,
        loading: action.payload,
      };

    case actiontypes().admin.clear:
      return {
        users: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default adminReducer;
