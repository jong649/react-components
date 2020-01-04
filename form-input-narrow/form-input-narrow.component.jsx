import React from "react";

import "./form-input-narrow.styles.scss";

const FormInputNarrow = ({ handleChange, label, ...otherProps }) => (
  <div className="group-narrow">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInputNarrow;
