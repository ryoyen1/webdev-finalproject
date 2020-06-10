import React, { Component } from 'react'
import './App.css';
import ReactDOM from 'react-dom'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './components/Landing'
// import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'
import Add from './components/Add'
import ListofProducts from './components/ListofProducts'

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="#products-section"/>
          {/* <Route exact path="/" component={Navbar}/> */}
          <Route exact path="/" component={Landing}/>
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/add" component={Add} />
            <Route exact path="/listofproducts" component={ListofProducts}/>
          </div>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App

if (document.getElementById('main')) {
  ReactDOM.render(<App />, document.getElementById('main'));
}