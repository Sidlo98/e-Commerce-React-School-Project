import actiontypes from "../actiontypes";
import axios from "axios";
import { store } from "../index";

const baseUrl = "http://localhost:9999";

export const getUsers = () => {
  return async (dispatch) => {
    let token = store.getState().userReducer.user.token;

    const res = await axios.get(`${baseUrl}/users/admin/all`, {
      headers: { Authorization: "Bearer " + token },
    });

    dispatch(setUsers(res.data.users));
  };
};

export const setUsers = (users) => {
  return {
    type: actiontypes().admin.setUsers,
    payload: users,
  };
};
