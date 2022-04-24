import { connect } from "react-redux";
import TableItem from "./TableItem";

const Table = (props) => {
  const { cols, rows } = props;

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(cols).map((field, index) => (
            <th key={index}>{cols[field]}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((item, index) => (
          <tr key={index}>
            <TableItem item={item} cols={cols} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Table);
