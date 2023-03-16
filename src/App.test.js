import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
import React from 'react';
import "./App.css";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route , link ,NavLink, Switch} from 'react-router-dom';
import { Home } from "./Home";
import { About } from "./About";
import { Next} from "./Next";

/*function App ()
{
  return(
    <Router>
        <div>
            <h1>React Router Example</h1>
            <Route exact path="/" component= {Home}/>
            <Route path="/a" component= {About}/>
            <Route path="/b" component= {Next}/>
            </div>
    </Router>
  );
}
export default App;*/
//ReactDOM.render(path,document.getElementById('root'));//


