import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'

// var axios = require('axios')

// var axiosInstance = axios.create({
//     baseURL: 'https://backend-user-finalproject.herokuapp.com'
// })

// module.exports = axiosInstance

export default class Listing extends Component {
    constructor(props){
        super(props)
        this.state={
            categories : [],
            categories_view : [],
            category_name:'',
            category_price:'',
            category_quantity:'',
            category_description:'',
            category_image:''
        }
    }

    componentDidMount()
    {
        
        axios.get('https://backend-user-finalproject.herokuapp.com/api/category')
        .then(response=>{
            this.setState({
                categories:response.data,
                category_name:response.data.name,
                category_price:response.data.price,
                category_quantity:response.data.quantity,
                category_description:response.data.description,
                category_image:response.data.images
                
            })
        })
    }

    onDelete(category_id)
    {
        axios.delete('https://backend-user-finalproject.herokuapp.com/api/category/delete/'+category_id)
        .then(response=>{
            
            var categories = this.state.categories

            for(var i = 0;i < categories.length;i++)
            {
                if(categories[i].id==category_id)
                {
                    categories.splice(i,1)
                    this.setState({categories:categories})
                }
            }
        })
    }

    onView(category_id)
    {
        axios.get('https://backend-user-finalproject.herokuapp.com/api/category/'+category_id)
        .then(response=>{
            this.setState({categories_view:response.data})
            console.log(response.data)
        })

    }


    render(){
        return (
            <div>
                {/* <Router> */}
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category N</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.categories.map(category=>{
                            return (
                        
                        <tr>
                        <th scope="row">{category.id}</th>
                        <td>{category.name}</td>
                        <td>{category.price}</td>
                        <td>{category.quantity}</td>
                        <td>{category.description}</td>
                        <td>
                            <Link to={`/category/edit/${category.id}`}>Edit</Link> |
                            <a href="#" onClick={this.onDelete.bind(this,category.id)}>Delete</a> |
                            <Link to={`/category/order/${category.id}`}>Order</Link></td>

                        <td>
                            <Link to={`/category/${category.id}`}>View</Link>
                            {/* <a href="#" onClick={this.onView.bind(this,category.id)}>View</a></td> */}
                        {/* {this.state.categories_view.map(category=>{
                            return (
                        )
                        })} */}
                        </td>
                        
                        </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
                {/* </Router> */}
            </div>
        );
    }
}