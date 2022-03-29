import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

export default function CheckBox({field}) {
  const { handleChange } = useContext(FormContext);

  return (
    <div><label>
        {field.field_label}
        </label><input type='checkbox' value={field.field_value} placeholder={field.placeholder} id={field.field_id} onChange={e => handleChange(field.field_id,e)}/></div>
  )
}
