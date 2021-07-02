import actiontypes from "../actiontypes";
import axios from "axios";

const baseUrl = "https://ecommerce-react-school-project.herokuapp.com";

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(loading(true));
    const res = await axios.get(`${baseUrl}/api/products`);
    dispatch(setProducts(res.data));
    dispatch(loading(false));
  };
};

export const setProducts = (payload) => {
  return {
    type: actiontypes().products.set,
    payload,
  };
};

export const loading = (payload) => {
  return {
    type: actiontypes().products.loading,
    payload,
  };
};
