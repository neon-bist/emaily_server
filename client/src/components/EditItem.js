import { useState } from "react";
import { connect } from "react-redux";

import { editProduct, setEditMode } from "../actions";
const EditItem = ({ context, editProduct, setEditMode }) => {
  const { item, cols } = context;
  const [it, sit] = useState(item);

  return (
    <div
      className="background-cover"
      onClick={(e) => {
        e.stopPropagation();
        setEditMode(false);
      }}
    >
      <div className="edit-box" onClick={(e) => e.stopPropagation()}>
        {Object.keys(cols).map((field, index) => (
          <div className="input-field col s6" key={index}>
            <div>
              <label htmlFor="name">{cols[field]}</label>
            </div>
            <input
              type="text"
              value={it[field]}
              onChange={(event) => {
                sit(() => {
                  const t = { ...it };
                  t[field] = event.target.value;
                  return t;
                });
              }}
            />
          </div>
        ))}
        <button
          className="btn waves-effect waves-light"
          onClick={() => {
            editProduct(it);
            setEditMode(false);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ products }) => {
  const {
    isEditing: { context },
  } = products;
  return { context };
};
export default connect(mapStateToProps, { editProduct, setEditMode })(EditItem);
