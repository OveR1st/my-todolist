import React from "react";

const Footer = () => {
  return (
    <div className="row d-flex justify-content-md-around">
      <input
        type="text"
        className="form-control col-md-7"
        placeholder="Add Item"
      />
      <button className="btn btn-success col-md-3">Add Item</button>
    </div>
  );
};

export default Footer;
