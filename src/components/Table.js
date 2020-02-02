import React from "react";

const Table = ({ children }) => (
  <ul className="list-group align-self-center" style={{ width: "100%" }}>
    {children}
  </ul>
);

export default Table;
