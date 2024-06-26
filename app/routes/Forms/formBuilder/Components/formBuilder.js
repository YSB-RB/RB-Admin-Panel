import $ from "jquery"; //Load jquery
import React, { createRef, useContext, useEffect, useState } from "react"; //For react component
import { MyContext } from "../Context/context";

// import ReactJson from 'react-json-view'                    //For JSON view
window.jQuery = $; //JQuery alias
window.$ = $; //JQuery alias

require("jquery-ui-sortable"); //For FormBuilder Element Drag and Drop
require("formBuilder"); // For FormBuilder

const FormBuilder = () => {
  const fb = createRef();
  let [formBuilder, setFormBuilder] = useState(null);
  const { form, setForm } = useContext(MyContext);
  useEffect(() => {
    //To create form
    if (!formBuilder?.formData) {
      setFormBuilder(
        $(fb.current).formBuilder({
          disabledActionButtons: ["data", "clear", "save"],
          formData: [],
        })
      );
    }
  }, []);
  async function saveData() {
    setForm(formBuilder.formData);
  }
  function clearData() {
    formBuilder.actions.clearFields();
    setForm({});
  }
  return (
    <div>
      <h1 className="title">Create Form</h1>
      <hr />
      <div ref={fb} />
      <div>
        {/* <div>
            {Object.keys(form).length > 0 &&
              <ReactJson src={JSON.parse(form)} />
            }
          </div> */}
        <div className="btn-group">
          <button onClick={saveData} type="button">
            Create Form
          </button>
          <button onClick={clearData} type="button">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
