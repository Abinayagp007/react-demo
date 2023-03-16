/*import React from 'react';
import ReactDOM, { render } from 'react-dom';

const Hello =<input type="text" label="Name:" id="name"/>

ReactDOM.render(Hello,document.getElementById("root"));*/

import { useState } from "react";
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
   
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          
        />
              </label>
              <h1> `The name you entered was: {name}`</h1>;
      <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

