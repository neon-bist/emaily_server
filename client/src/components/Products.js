import { useEffect } from "react";
import { connect } from "react-redux";
import Table from "./Table";
import * as actions from "../actions";

const Products = (props) => {
  console.log(props.products);
  const rows = props.products;
  useEffect(() => {
    props.fetchProducts();
  }, []);
  if (!rows) return;
  return (
    <Table
      cols={{
        name: "Name",
        stock: "Stock",
        price: "Price",
        product_code: "Code",
      }}
      rows={rows}
    />
  );
};
const mapStateToProps = ({ products }) => {
  return { products };
};
export default connect(mapStateToProps, actions)(Products);
