import { useState } from "react";
import { connect } from "react-redux";

import axios from "axios";

const AddProduct = ({ cols, setAddingMode }) => {
  const values = {
    name: "",
    stock: "",
    price: "",
    product_code: "",
  };
  const [it, sit] = useState(values);

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/product", it);
    } catch (e) {
      e.response.status == 404 && console.log("NOT FOUND");
    }
    setAddingMode(false);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    sit((values) => ({ ...values, [name]: value }));
  };

  return (
    <div
      className="background-cover"
      onClick={(e) => {
        e.stopPropagation();
        setAddingMode(false);
      }}
    >
      <form
        className="edit-box"
        onClick={(e) => e.stopPropagation()}
        onSubmit={addProduct}
      >
        {Object.keys(cols).map((field, index) => (
          <div className="input-field col s6" key={index}>
            <div>
              <label htmlFor="name">{cols[field]}</label>
            </div>
            <input
              type="text"
              name={field}
              value={it[field]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button role="submit" className="btn waves-effect waves-light">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
