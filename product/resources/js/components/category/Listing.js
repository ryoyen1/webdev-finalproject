import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'

export default class Listing extends Component {
    constructor(){
        super()
        this.state={
            categories : [],
            categories_view : []
        }
    }

    componentDidMount()
    {
        axios.get('http://127.0.0.1:8000/api/category')
        .then(response=>{
            this.setState({categories:response.data})
        })
    }

    onDelete(category_id)
    {
        axios.delete('http://127.0.0.1:8000/api/category/delete/'+category_id)
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
        axios.get('http://127.0.0.1:8000/api/category/'+category_id)
        .then(response=>{
            this.setState({categories_view:response.data})
            console.log(response.data)
        })

    }

    render(){
        return (
            <div>
                <Router>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category Name</th>
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
                        <td><a href="#" onClick={this.onDelete.bind(this,category.id)}>Delete</a></td>
                        <td>
                            <Link to={`/category/${category.id}`}>View</Link>
                            <a href="#" onClick={this.onView.bind(this,category.id)}>View</a></td>)
                        {/* {this.state.categories_view.map(category=>{
                            return (
                        )
                        })} */}
                        
                        </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
                </Router>
            </div>
        );
    }
}