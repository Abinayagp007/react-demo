

import React from 'react';
import ReactDOM from 'react-dom';
import { name, age } from "./export.js";

function App()
{
  return (
   <p> {name}</p>
  )
}
 ReactDOM.render(<App/>,document.getElementById("root"));




 const message = () => {
    const name = "Jesse";
    const age = 40;
    return name + ' is ' + age + 'years old.';
  };
  
  export default message;