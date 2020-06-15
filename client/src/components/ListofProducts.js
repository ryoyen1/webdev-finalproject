import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter as withRouter,Link} from 'react-router-dom'


export default class Listing extends Component {
    constructor(){
        super()
        this.onChangeCategoryQuantity=this.onChangeCategoryQuantity.bind(this)
        this.state={
            categories : [],
            category_quantity : 0
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

    onOrder(category_id)
    {
        var quantity = this.state.quantity
        axios.get('https://backend-user-finalproject.herokuapp.com/api/category')
        .then(response=>{
            this.setState({categories:response.data.quantity - 1})
            console.log("Minus - 1")
        })
    }

    onChangeCategoryQuantity(e){
        this.setState({
            category_quantity:e.target.value
        })
        console.log("it worked")
    }

    render(){
        return (
            <div>
                <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
                <div class="site-wrap">
                    <div class="site-section" id="products-section"></div>
                        <div class="container">
                            <div class="row mb-5 justify-content-center">
                                <div class="col-md-6 text-center">
                                    <h3 class="section-sub-title">Popular Products</h3>
                                    <h2 class="section-title mb-3">Our Products</h2>
                                    <p>This is a list of products that is available in this website.</p>
                                </div>
                            </div>
                            <div class="row">
                            {this.state.categories.map(category=>{
                            return (
                                <div class="col-lg-4 col-md-3 mb-5">
                                        <div class="product-item">
                                            <figure>
                                            <img src="assets/images/unyu.png" alt="" class="img-fluid"/>
                                            </figure>
                                            <div class="px-4">
                                            <h3><a href="/#">{category.name}</a></h3>
                                            <div class="mb-3">
                                                <span class="meta-icons mr-3"><a href="/#" class="mr-2"></a>${category.price}</span>
                                                <span class="meta-icons wishlist"><a href="/#" class="mr-2"></a>Stock:{category.quantity}</span>
                                            </div>
                                            <p class="mb-4">{category.description}</p>
                                            {/* <div> */}
                                                <Link to={`/listofproducts/order/${category.id}`}>
                                                    <button class="btn btn-black mr-1 rounded-0">
                                                        Order
                                                    </button>
                                                </Link>
                                                
                                                <Link to={`/listofproducts/${category.id}`}>
                                                    <button class="btn btn-black btn-outline-black ml-1 rounded-0">
                                                        View
                                                    </button>
                                                </Link>
                                                    
                                            {/* </div> */}
                                            
                                            </div>                                            
                                            </div>
                                        </div>
                            )
                        })
                    }
                    </div>
                    </div>
                    </div>
                    </body>
                
            </div>
        );
    }
}
