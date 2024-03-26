import FormBuilder from './Components/formBuilder';
import FormRender from './Components/formRender';
import './styles/App.css'
import { MyContext } from './Context/context';
import { useState } from 'react';
import React from 'react';

function Main() {
  const [form, setForm] = useState({});

  return (
    <div className="App">
      <MyContext.Provider value={{ form, setForm }}>
        <div className='float-container'>
          <div className="float-child">
            <FormBuilder />
          </div>
          <div className="float-child">
            <FormRender />
          </div>
        </div>
      </MyContext.Provider>
      <h1>Hello</h1>
    </div>
  );
}

export default Main;
