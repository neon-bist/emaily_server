import { FETCH_PRODUCTS, IS_EDITING } from "../actions/types";

export default function productReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };

    case IS_EDITING:
      return { ...state, isEditing: action.payload };
    default:
      return state;
  }
}
