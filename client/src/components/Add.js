import React, {Component} from 'react'
import {addcart} from './UserFunctions'

class Add extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            price:'',
            quantity: '',
            attribute: '',
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

        const newItem = {
            name: this.state.name,
            price: this.state.price,
            quantity: this.state.quantity,
            attribute: this.state.attribute
        }

        addcart(newItem).then(res => {
            this.props.history.push(`/listofproducts`)
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
                                <label htmlFor="name">Name</label>
                                <input type="text"
                                className="form-control"
                                name="name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <input type="text"
                                className="form-control"
                                name="price"
                                placeholder="Price"
                                value={this.state.price}
                                onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="quantity">Quantity</label>
                                <input type="text"
                                className="form-control"
                                name="quantity"
                                placeholder="Quantity"
                                value={this.state.quantity}
                                onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="attribute">Attribute</label>
                                <input type="text"
                                className="form-control"
                                name="attribute"
                                placeholder="Attribute"
                                value={this.state.attribute}
                                onChange={this.onChange}/>
                            </div>
                            <button type="submit" className="button btn btn-lg btn-primary btn-block">Add product</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Add