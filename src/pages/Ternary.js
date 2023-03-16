
condition ? <expression if true> : <expression if false>
import React from 'react';
import ReactDOM from 'react-dom/client';

import { MessageSharp } from '@mui/icons-material';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { useState, useEffect } from "react";

export default function Index() {
  const [msg ,Setmsg]=useState(["a","b"])


return (
  <div>
    {
      msg.length===0?
      <h1>it's working</h1>:<h1>you have{msg.length}unread msg{msg.length >1 && "s"}  </h1>
    }
  </div>
  
)
}

export default function(props)
{const[isShown, setIsShown]=React.useState(false)
function toggleShown(){
    setIsShown(prevShown => !prevShown)
}
return(
    <div>
        {props.setup && <h3>{props.setup}</h3>}
        {isShown && <p>{props.punchline}</p>} 
        <button onClick={toggleShown}>{isShown ? "Hide" :"show"}punchline</button>   </div>
)} // button will toggle b/w hide/show//


const x = 5;

const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);




function MissedGoal() {
	return <h1>MISSED!</h1>;
}

function MadeGoal() {
	return <h1>GOAL!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
	return (
		<>
			{ isGoal ? <MadeGoal/> : <MissedGoal/> }
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);


function renderApp() {
  document.getElementById("demo").innerHTML = "Welcome!";
}

function renderLogin() {
  document.getElementById("demo").innerHTML = "Please log in";
}

let authenticated = true;

authenticated ? renderApp() : renderLogin();





function Garage(props) {
    const cars = props.cars;
    return (
      <>
        <h1>Garage</h1>
        {cars.length > 0 &&
          <h2>
            You have {cars.length} cars in your garage.
          </h2>
        }
      </>
    );
  }
  
  const cars = [];
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage cars={cars} />);