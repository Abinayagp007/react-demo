function Car() {
    return <h2>Hi, I am a Car!</h2>;
  }
  
  export default Car;


  import React from 'react';
import ReactDOM from 'react-dom';
import Car from './Exportexample.js';

ReactDOM.render(<Car/>,document.getElementById('root'));

//save the file name with Car.js//