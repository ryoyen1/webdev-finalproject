import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Category from './category/Index';


export default class Header extends Component {
    render(){
        return (
            <Router>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About us</Link>
                    <Link to="/category">Category</Link>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/about' component={About}></Route>
                    <Route exact path='/category' component={Category}/>
                </div>
            </Router>
        );
    }
}


// if (document.getElementById('app')) {
//     ReactDOM.render(<Index />, document.getElementById('app'));
// }
