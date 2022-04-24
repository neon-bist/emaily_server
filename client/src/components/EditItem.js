import { useState } from "react";
import { connect } from "react-redux";
const EditItem = ({ context }) => {
  const { item, cols } = context;
  const [it, sit] = useState(item);

  return (
    <div className="background-cover">
      <div className="edit-box">
        {Object.keys(cols).map((field, index) => (
          <div className="input-field col s6" key={index}>
            <div>
              <label for="name">{cols[field]}</label>
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
        <button onClick={() => 1}>Save</button>
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
export default connect(mapStateToProps)(EditItem);
