import actiontypes from "../actiontypes";
import axios from "axios";

const baseUrl = "http://localhost:9999";

export const registerUser = (user) => {
  return (dispatch) => {
    dispatch(loading(true));

    axios
      .post(`${baseUrl}/users/register`, user)
      .then((res) => {
        console.log(res.data);
        dispatch(login(res.data));
      })
      .catch((error) => {
        console.log(error.response.data.message);
        dispatch(setError(error.response.data.message));
      });

    dispatch(loading(false));
  };
};

export const logout = () => {
  return {
    type: actiontypes().user.logout,
  };
};

export const login = (user) => {
  return {
    type: actiontypes().user.set,
    payload: user,
  };
};

export const loading = (payload) => {
  return {
    type: actiontypes().user.loading,
    payload,
  };
};

export const setError = (payload) => {
  return {
    type: actiontypes().user.regError,
    payload,
  };
};

export const clearRegError = () => {
  return {
    type: actiontypes().user.clearRegError,
  };
};
