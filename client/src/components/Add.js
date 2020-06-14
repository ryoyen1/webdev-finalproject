import React, {Component} from 'react'
import axios from 'axios'

export default class Add extends Component{

    constructor(){
        super()
        this.state={
            category_name:'',
            category_price:'',
            category_quantity:'',
            category_description:'',
            category_image:''
        }

        this.onChangeCategoryName=this.onChangeCategoryName.bind(this)
        this.onChangeCategoryPrice=this.onChangeCategoryPrice.bind(this)
        this.onChangeCategoryQuantity=this.onChangeCategoryQuantity.bind(this)
        this.onChangeCategoryDescription=this.onChangeCategoryDescription.bind(this)
        this.onChangeCategoryImage=this.onChangeCategoryImage.bind(this)
        // this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
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

    // onChange (e){
    //     this.setState({ [e.target.name]: e.target.value})
    // }

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

        axios.post('https://backend-user-finalproject.herokuapp.com/api/category/store', category)
        .then(res=>
            // console.log(res.data)
            window.alert("Data added"))
    }
    render(){
        return(
            <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
            <div class="site-wrap">
            {/* // <div className="container">
            //     <div className="row">
            //         <div className="col-md-6 mt-5 mx-auto"> */}
                        <form action="" method="POST" enctype="multipart/form-data" onSubmit={this.onSubmit}>
                        
                        <div class="form-group">
                            <label for="category_name">Category name</label>
                            <input type="text" 
                            class="form-control"
                            id="category_name" 
                            value = {this.state.category_name}
                            onChange={this.onChangeCategoryName}
                            placeholder ="Enter Name"
                            />
                        </div>
                        <div class="form-group">
                            <label for="category_price">Category price</label>
                            <input type="number" 
                            class="form-control"
                            id="category_price" 
                            value = {this.state.category_price}
                            onChange={this.onChangeCategoryPrice}
                            placeholder ="Enter price"
                            />
                        </div>
                        <div class="form-group">
                            <label for="category_quantity">Category quantity</label>
                            <input type="number" 
                            class="form-control"
                            id="category_quantity" 
                            value = {this.state.category_quantity}
                            onChange={this.onChangeCategoryQuantity}
                            placeholder ="Enter quantity"
                            />
                        </div>
                        <div class="form-group">
                            <label for="category_description">Category description</label>
                            <input type="text" 
                            class="form-control"
                            id="category_description" 
                            value = {this.state.category_description}
                            onChange={this.onChangeCategoryDescription}
                            placeholder ="Enter descriptionasd"
                            />
                        </div>
                        {/* <div class="input-group">
                            <div class="custom-file">
                                <input type="file" 
                                class="custom-file-input"
                                id="category_image"
                                value = {this.state.category_image}
                                onChange={this.onChangeCategoryImage}
                                />
                                <label class="custom-file-label" id="category_image">Choose</label>
                            </div>
                        </div> */}
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </body>
        //     </div>
        )
    }
}
