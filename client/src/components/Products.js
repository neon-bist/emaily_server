import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Table from "./Table";
import * as actions from "../actions";
import EditItem from "./EditItem";
import AddProduct from "./AddProduct";

const Products = (props) => {
  const rows = props.products;
  const cols = {
    name: "Name",
    stock: "Stock",
    price: "Price",
    product_code: "Code",
  };
  const [isAdding, setAddingMode] = useState(false);
  console.log(rows);
  useEffect(() => {
    !isAdding && props.fetchProducts();
  }, [isAdding]);
  if (!rows) return;
  return (
    <div>
      <Table cols={cols} rows={rows} hasActions />
      <div style={{ position: "relative" }}>
        <button
          className="btn waves-effect waves-light"
          style={{ width: "100%" }}
          onClick={setAddingMode}
        >
          Add
        </button>
      </div>
      {props.isEditing?.state && <EditItem />}
      {isAdding && <AddProduct setAddingMode={setAddingMode} cols={cols} />}
    </div>
  );
};
const mapStateToProps = ({ products: reducer }) => {
  const { isEditing, products } = reducer;
  return { isEditing, products };
};
export default connect(mapStateToProps, actions)(Products);
