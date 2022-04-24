import axios from "axios";
import { FETCH_PRODUCTS, FETCH_USER, IS_EDITING, EDIT_PRODUCT } from "./types";

export const fetchUser = () => async (dispatch) => {
  const { data } = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: data });
};
export const fetchProducts = () => async (dispatch) => {
  const { data } = await axios.get("/api/products");
  dispatch({ type: FETCH_PRODUCTS, payload: data });
};

export const handleToken = (token) => async (dispatch) => {
  const { data } = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: data });
};

export const setEditMode = (isEditing, context = {}) => {
  return {
    type: IS_EDITING,
    payload: { state: isEditing, context },
  };
};

export const editProduct = (item) => {
  return {
    type: EDIT_PRODUCT,
    payload: { item },
  };
};
