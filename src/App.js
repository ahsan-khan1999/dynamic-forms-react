import logo from "./logo.svg";
import "./App.css";
import formData from "./formData.json";
import { useState, useEffect } from "react";
import Element from "./components/Element";
import { FormContext } from "./FormContext";
function App() {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(formData[0]);
  }, []);
  const { fields, page_label } = elements ?? {};
  const handleChange = (id, e) => {
    const newElements = {...elements};
    newElements.fields.forEach((element) => {
      if (id === element.field_id) {
        switch (element.field_type) {
          case "checkbox":
            // element.field_value = e.target.check
            element['field_value'] = e.target.checked;
            break;

          default:
            element['field_value'] = e.target.value;
        }
      }
      setElements(newElements);
    });
    console.log(elements, "elemts");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(elements, "elements");
  };
  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="container">
        <div>{page_label}</div>
        <form>
          {fields
            ? fields?.map((item, i) => <Element key={i} field={item} />)
            : null}
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </div>
    </FormContext.Provider>
  );
}

export default App;
