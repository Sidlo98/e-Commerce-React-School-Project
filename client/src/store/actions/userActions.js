import actiontypes from "../actiontypes";
import { clearCart } from "./cartActions";
import axios from "axios";
import { store } from "../index";

const baseUrl = "http://localhost:9999";

export const registerUser = (user, history, errCallback) => {
  return (dispatch) => {
    dispatch(loading(true));
    axios
      .post(`${baseUrl}/users/register`, user)
      .then((res) => {
        dispatch(login(user, history));
        dispatch(clearRegError());
      })
      .catch((error) => {
        setTimeout(() => {
          dispatch(setRegError(error.response.data.message));
          errCallback(error.response.data.message);
          dispatch(loading(false));
        }, 1000);
      });
  };
};

export const login = (user, history) => {
  return (dispatch) => {
    dispatch(loading(true));
    axios
      .post(`${baseUrl}/users/login`, user)
      .then((res) => {
        setTimeout(() => {
          let activeUser = {
            id: res.data.user._id,
            firstName: res.data.user.firstName,
            lastName: res.data.user.lastName,
            email: res.data.user.email,
            admin: res.data.user.admin,
            orders: res.data.user.orders,
            token: res.data.token,
          };
          dispatch(setUser(activeUser));
          dispatch(clearLoginError());
          history.push("/");
          dispatch(loading(false));
        }, 1500);
      })
      .catch((error) => {
        setTimeout(() => {
          dispatch(setLoginError(error.response.data.message));
          dispatch(loading(false));
        }, 1000);
      });
  };
};

export const addToOrder = (order, history) => {
  return (dispatch) => {
    dispatch(loading(true));
    let email = store.getState().userReducer.user.email;
    let token = store.getState().userReducer.user.token;

    axios
      .patch(`${baseUrl}/users/addorder/${email}`, order, {
        headers: { Authorization: "Bearer " + token },
      })
      .then(() => {
        setTimeout(() => {
          dispatch(updateUser());
          dispatch(clearOrderError());
          dispatch(clearCart());
          history.push("/profile");
          dispatch(loading(false));
        }, 1500);
      })
      .catch((error) => {
        setTimeout(() => {
          dispatch(setOrderError(error.response.data.message));
          dispatch(loading(false));
        }, 1000);
      });
  };
};

export const updateUser = () => {
  return (dispatch) => {
    let email = store.getState().userReducer.user.email;
    let token = store.getState().userReducer.user.token;
    axios
      .get(`${baseUrl}/users/${email}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        let activeUser = {
          id: res.data.user._id,
          firstName: res.data.user.firstName,
          lastName: res.data.user.lastName,
          email: res.data.user.email,
          admin: res.data.user.admin,
          orders: res.data.user.orders,
          token: res.data.token,
        };
        dispatch(setUser(activeUser));
      });
  };
};

export const setUser = (user) => {
  return {
    type: actiontypes().user.set,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: actiontypes().user.logout,
  };
};

// Helpers

export const loading = (payload) => {
  return {
    type: actiontypes().user.loading,
    payload,
  };
};

export const setLoginError = (payload) => {
  return {
    type: actiontypes().user.loginError,
    payload,
  };
};

export const clearLoginError = () => {
  return {
    type: actiontypes().user.clearLoginError,
  };
};

export const setRegError = (payload) => {
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

export const setOrderError = (payload) => {
  return {
    type: actiontypes().user.orderError,
    payload,
  };
};

export const clearOrderError = () => {
  return {
    type: actiontypes().user.clearOrderError,
  };
};
