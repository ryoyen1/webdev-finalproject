import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Footer from './Footer'

export default class Index extends Component {
    render(){
        return (
            <div className="container">
            <Header/>
                <div className="row justify-content-center">
                    Testing body :D
                    This is the main index.js file
                </div>
                <Footer/>
            </div>
        );
    }
}


if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
