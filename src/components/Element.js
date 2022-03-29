import React from "react";
import CheckBox from "./elements/CheckBox";
import Input from "./elements/Input";
import Select from "./elements/Select";

export default function Element({ field }) {
  switch (field.field_type) {
    case "text":
      return <Input field={field} />;
    case "select":
      return <Select field={field}/>;
    case "checkbox":
      return <CheckBox field={field}/>;
    default:
      break;
  }
}
