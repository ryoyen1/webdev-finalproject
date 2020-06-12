import React, { Component } from 'react';
import axios from 'axios'

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
        axios.get('https://backend-user-finalproject.herokuapp.com/api/category')
        .then(response=>{
            this.setState({categories:response.data})
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
                        {this.state.categories.map(category_view=>{
                            return (
                        
                        <tr>
                        <th scope="row">{category_view.id}</th>
                        <td>{category_view.name}</td>
                        <td>{category_view.price}</td>
                        <td>{category_view.quantity}</td>
                        <td>{category_view.description}</td>
                        {/* <td><a href="#" onClick={this.onDelete.bind(this,category.id)}>Delete</a></td>
                        <td><a href="#" onClick={this.onView.bind(this,category.id)}>View</a></td> */}
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
            </div>
        );
    }
}