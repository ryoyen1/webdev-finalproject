import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Landing extends Component {
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render(){
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/listofproducts" className="nav-link">
                        Products list
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">
                        About
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
                <li className="nav-item">
                    <Link to="/listofproductsEdit" className="nav-link">
                        Products list
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/add" className="nav-link">
                        Add
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">
                        About
                    </Link>
                </li>
            </ul>
                
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button 
                    className="navbar-toggler"
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbar1" 
                    aria-controls="navbar1" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1"> 
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}

export default withRouter(Landing)