import React, { Component } from 'react';
import Axios from 'axios';
import {BrowserRouter as withRouter,Link} from 'react-router-dom'

export default class ViewProduct extends Component {

    constructor(props){
        super(props)
        this.onChangeCategoryName=this.onChangeCategoryName.bind(this)
        this.onChangeCategoryPrice=this.onChangeCategoryPrice.bind(this)
        this.onChangeCategoryQuantity=this.onChangeCategoryQuantity.bind(this)
        this.onChangeCategoryDescription=this.onChangeCategoryDescription.bind(this)
        this.onChangeCategoryImage=this.onChangeCategoryImage.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
        this.state={
            category_name:'',
            category_price:'',
            category_quantity:'',
            category_description:'',
            category_image:''
        }

    }

    componentDidMount()
    {
        Axios.get('https://backend-user-finalproject.herokuapp.com/api/category/edit/'+this.props.match.params.id)
        .then(response=>{
            this.setState({
                category_name:response.data.name,
                category_price:response.data.price,
                category_quantity:response.data.quantity,
                category_description:response.data.description,
                category_image:response.data.images
            })
        })
    }

    onChangeCategoryName(e){
        this.setState({
            category_name:e.target.value
        })
    }

    onChangeCategoryPrice(e){
        this.setState({
            category_price:e.target.value
        })
    }

    onChangeCategoryQuantity(e){
        this.setState({
            category_quantity:e.target.value
        })
    }

    onChangeCategoryDescription(e){
        this.setState({
            category_description:e.target.value
        })
    }

    onChangeCategoryImage(e){
        this.setState({
            category_image:e.target.value
        })
    }

    onSubmit(e)
    {
        e.preventDefault()
        const category = {
            category_name : this.state.category_name,
            category_price : this.state.category_price,
            category_quantity : this.state.category_quantity,
            category_description : this.state.category_description,
            category_image : this.state.category_image
        }



        Axios.put('https://backend-user-finalproject.herokuapp.com/api/category/update/'+this.props.match.params.id, category)
        .then(res=>console.log(res.data))
    }

    render(){
        return (
            <div class="site-section bg-light">
        <div class="container">

          <div class="bg-white py-4 mb-4">
            <div class="row mx-4 my-4 product-item-2 align-items-start">
              <div class="col-md-6 mb-5 mb-md-0">
                <img src={require('./unyu.png')} alt="" class="img-fluid"/>
              </div>
              <div class="col-md-5 ml-auto product-title-wrap">
                <span class="number">01.</span>
                <h3 class="text-black mb-4 font-weight-bold">About This Product</h3>
                <p class="mb-4">{this.state.category_description}</p>
                
                <div class="mb-4"> 
                  <h3 class="text-black font-weight-bold h5">Price:</h3>
                  <div class="price">${this.state.category_price}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
    }
}