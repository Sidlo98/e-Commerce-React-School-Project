import actiontypes from "../actiontypes";
import axios from "axios";
import { store } from "../index";

const baseUrl = "http://localhost:9999";

export const getUsers = () => {
  return async (dispatch) => {
    dispatch(loading(true));
    let token = store.getState().userReducer.user.token;

    const res = await axios.get(`${baseUrl}/users/admin/all`, {
      headers: { Authorization: "Bearer " + token },
    });

    dispatch(setUsers(res.data.users));
    dispatch(loading(false));
  };
};

export const setUsers = (users) => {
  return {
    type: actiontypes().admin.setUsers,
    payload: users,
  };
};

export const updateUserOrders = (orders, userId) => {
  return {
    type: actiontypes().admin.updateOrders,
    payload: {
      orders,
      userId,
    },
  };
};

export const saveChange = (userId) => {
  return async (dispatch) => {
    let token = store.getState().userReducer.user.token;
    let users = store.getState().adminReducer.users;

    let currUser = users.find((user) => user._id === userId);

    await axios.patch(
      `${baseUrl}/users//admin/updateOrders/${userId}`,
      currUser.orders,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );

    dispatch(hasBeenSaved(userId));
  };
};

// Helpers

export const hasBeenSaved = (userId) => {
  return {
    type: actiontypes().admin.hasBeenSaved,
    payload: userId,
  };
};

export const loading = (payload) => {
  return {
    type: actiontypes().admin.loading,
    payload,
  };
};

export const clearAdmin = () => {
  return {
    type: actiontypes().admin.clear,
  };
};
