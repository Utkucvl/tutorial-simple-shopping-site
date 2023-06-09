import React from "react";

const textInput = ({ name, label, onChange, value, error, placeHolder }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFom={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        ></input>
        {error&&<div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default textInput;
