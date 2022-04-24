import { useState } from "react";

const TableItem = ({ item, cols }) => {
  const [isEditing, setEditing] = useState(false);
  const [it, sit] = useState(item);
  const extraFields = () => (
    <td key="btn1">
      <button onClick={() => setEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </td>
  );

  if (isEditing) {
    return [
      Object.keys(cols).map((field, index) => (
        <td key={index} style={{ width: "20%" }}>
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
        </td>
      )),
      extraFields(),
    ];
  }

  return [
    Object.keys(cols).map((field, index) => <td key={index}>{it[field]}</td>),
    extraFields(),
  ];
};

export default TableItem;
