import React, {Component} from 'react'
import {register} from './UserFunctions'

class Register extends Component{
    constructor(){
        super()
        this.state = {
            first_name: '',
            last_name:'',
            email: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e){
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const newUser = {
            name: this.state.first_name + ' ' + this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res => {
            this.props.history.push(`/login`)
            window.alert("Successfully registered")
        })
    }
    
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">
                                Register
                            </h1>
                            <div className="form-group">
                                <label htmlFor="name">Branch name</label>
                                <input type="text"
                                className="form-control"
                                name="first_name"
                                placeholder="First Name"
                                value={this.state.first_name}
                                onChange={this.onChange}/>
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="name">Last name</label>
                                <input type="text"
                                className="form-control"
                                name="last_name"
                                placeholder="Last Name"
                                value={this.state.last_name}
                                onChange={this.onChange}/>
                            </div> */}
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.onChange}/>
                            </div>
                            <button type="submit" className="button btn btn-lg btn-primary btn-block">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register