import { useEffect } from "react";
import { connect } from "react-redux";
import Table from "./Table";
import * as actions from "../actions";
import EditItem from "./EditItem";

const Products = (props) => {
  const rows = props.products;
  console.log("row", rows);
  useEffect(() => {
    props.fetchProducts();
  }, []);
  if (!rows) return;
  return (
    <div>
      {props.isEditing?.state && <EditItem />}
      <Table
        cols={{
          name: "Name",
          stock: "Stock",
          price: "Price",
          product_code: "Code",
        }}
        rows={rows}
      />
    </div>
  );
};
const mapStateToProps = ({ products: reducer }) => {
  const { isEditing, products } = reducer;
  return { isEditing, products };
};
export default connect(mapStateToProps, actions)(Products);
