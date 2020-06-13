import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Add from './Add'
import Listing from './Listing'
import Edit from './Edit'

export default class Index extends Component {
    render(){
        return (
            <div>
                <Router>
                    <div>
                        <hr/>
                            <Link to="/category" className="btn btn-primary">Listing</Link>
                            <Link to="/category/store" className="btn btn-primary">Add</Link>
                            <Route exact path="/category" component={Listing}></Route>
                            <Route exact path="/category/store" component={Add}/>
                            <Route exact path="/category/edit/:id" component={Edit}/>
                    </div>
                </Router>
                
            </div>
        );
    }
}