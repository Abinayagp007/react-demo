import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Next} from './Next';

const path =(
    <router>
        <div>
            <h1>React Router Example</h1>
            <Route exact path="/" component={Home}/>
            <Route path="/a" component={About}/>
            <Route path="/b" component={Next}/>
            </div>
    </router>
)
ReactDOM.render(path,document.getElementById('root'));

