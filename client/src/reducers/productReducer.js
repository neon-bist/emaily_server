import { FETCH_PRODUCTS, IS_EDITING, EDIT_PRODUCT } from "../actions/types";

export default function productReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };

    case IS_EDITING:
      return { ...state, isEditing: action.payload };
    case EDIT_PRODUCT:
      const { products } = state;
      console.log(products, action.payload);
      let edited = products.map((product) =>
        action.payload.item._id == product._id ? action.payload.item : product
      );
      return { ...state, products: edited };
    default:
      return state;
  }
}
