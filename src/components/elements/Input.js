import React, { useContext } from "react";
import { FormContext } from "../../FormContext";
const Input = ({ field }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div>
      <label>{field.field_label}</label>
      <input
        required={field?.required}
        id={field.field_id}
        value={field.field_value}
        placeholder={field.field_placeholder}
        onChange={(e) => handleChange(field.field_id, e)}
      />
    </div>
  );
};

export default Input;
