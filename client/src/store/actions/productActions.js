import actiontypes from "../actiontypes";
import axios from "axios";

const baseUrl = "http://localhost:9999";

export const getProduct = (id) => {
  return async (dispatch) => {
    dispatch(loading(true));
    const res = await axios.get(`${baseUrl}/api/products/${id}`);
    dispatch(setProduct(res.data));
    dispatch(loading(false));
  };
};

export const setProduct = (payload) => {
  return {
    type: actiontypes().product.set,
    payload,
  };
};

export const loading = (payload) => {
  return {
    type: actiontypes().product.loading,
    payload,
  };
};

export const clearProduct = () => {
  return {
    type: actiontypes().product.clear
  }
}