import React, { Component } from 'react';
import Axios from 'axios';

export default class Edit extends Component {

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
            <div>
                Your order:
                {this.state.category_name},
                {this.state.category_price},
                {this.state.category_quantity},
                {this.state.category_description},
                {this.state.category_image}
            </div>
        );
    }
}