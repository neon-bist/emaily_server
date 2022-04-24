import { connect } from "react-redux";
import * as actions from "../actions";

const TableItem = ({ item, cols, setEditMode }) => {
  const extraFields = () => (
    <td key="btn1">
      <button onClick={() => setEditMode(true, { item, cols })}>Edit</button>
    </td>
  );

  return [
    Object.keys(cols).map((field, index) => <td key={index}>{item[field]}</td>),
    extraFields(),
  ];
};

export default connect(null, actions)(TableItem);
