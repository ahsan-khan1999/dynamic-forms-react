import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

export default function Select({ field }) {
  const {handleChange} = useContext(FormContext)
  return (
    <div>
      <label>{field.field_label}</label>
      <select id={field.field_id} placeholder={field.field_placeholder} onChange={e => handleChange(field.field_id,e)}>
        <option>Select Value</option>
        {field?.field_options &&
          field?.field_options?.map((item, i) => (
            <option key={i} value={item.option_label}>
              {item.option_label}
            </option>
          ))}
      </select>
    </div>
  );
}
