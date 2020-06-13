import React, { Component } from 'react'
import '../App.css';
import hero_2 from '../images/hero_2.jpg'
import Listing from '../components/ListofProducts'
import axios from 'axios'

class Landing extends Component {
  constructor(){
    super()
    this.state={
        categories : [],
        showItems:6
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
    render() {
      return (
    
    <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
    
    <div class="site-wrap">
  
      <div class="site-mobile-menu site-navbar-target">
        <div class="site-mobile-menu-header">
          <div class="site-mobile-menu-close mt-3">
            <span class="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div class="site-mobile-menu-body"></div>
      </div>
     
      <div class="top-bar py-3 bg-light" id="home-section">
        <div class="container">
          <div class="row align-items-center">
           
            <div class="col-6 text-left">
              <ul class="social-media">
                <li><a href="https://facebook.com" class=""><span class="icon-facebook"></span></a></li>
                <li><a href="https://twitter.com" class=""><span class="icon-twitter"></span></a></li>
                <li><a href="https://instagram.com" class=""><span class="icon-instagram"></span></a></li>
                <li><a href="https://linkedin.com" class=""><span class="icon-linkedin"></span></a></li>
              </ul>
            </div>
            <div class="col-6">
              <p class="mb-0 float-right">
                <span class="mr-3"><a href="tel://#"> <span class="icon-phone mr-2" style={{position: 'relative', top: '2px'}}></span><span class="d-none d-lg-inline-block text-black">(+62) 123 4567 8910</span></a></span>
                <span><a href="/#"><span class="icon-envelope mr-2" style={{position: 'relative', top: '2px'}}></span><span class="d-none d-lg-inline-block text-black">binus@binus.binus</span></a></span>
              </p>
              
            </div>
          </div>
        </div> 
      </div>
  
    
       
      <div class="site-blocks-cover overlay" style={{backgroundImage: `url(${hero_2})`}} data-aos="fade" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row align-items-center justify-content-center">
  
            <div class="col-md-12" data-aos="fade-up" data-aos-delay="400">
                          
              {/* <div class="row mb-4">
                <div class="col-md-7">
                  <h1>Shop With Us</h1>
                  <p class="mb-5 lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                  <div>
                    <a href="/#" class="btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block">Shop Now</a>
                    <a href="/#" class="btn btn-white py-3 px-5 rounded-0 d-block d-sm-inline-block">Club Membership</a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>  
  
{/* PRODUCTS SECTION */}
      
      <div class="site-section" id="products-section">
        <div class="container">
          <div class="row mb-5 justify-content-center">
            <div class="col-md-6 text-center">
              <h3 class="section-sub-title">Popular Products</h3>
              <h2 class="section-title mb-3">Our Products</h2>
              <p>This is a list of products that is available in this website.</p>
            </div>
          </div>
          <div class="row">
          
          {this.state.categories.slice(0,this.state.showItems).map(category=>{
          return (
            <div class="col-lg-4 col-md-3 mb-5">
              <div class="product-item">
                <figure>
                <img src="assets/images/questionmark.png" alt="" class="img-fluid"/>
                </figure>
                <div class="px-4">
                <h3><a href="/#">{category.name}</a></h3>
                  <div class="mb-3">
                    <span class="meta-icons mr-3"><a href="/#" class="mr-2"><span class="icon-star text-warning"></span></a> 5.0</span>
                    <span class="meta-icons wishlist"><a href="/#" class="mr-2"><span class="icon-heart"></span></a> 29</span>
                  </div>
                  <p class="mb-4">{category.description}</p>
                    <div>
                      <a href="/#" class="btn btn-black mr-1 rounded-0">Cart</a>
                      <a href="/listofproducts" class="btn btn-black btn-outline-black ml-1 rounded-0">View</a>
                    </div>
                  </div>                                            
                </div>
               </div>
              )
            })
          }
          </div>



        </div>
      </div>
      
      <div class="site-blocks-cover inner-page-cover overlay get-notification" style={{backgroundImage: `url(${hero_2})`, backgroundAttachment: 'fixed'}} data-aos="fade">
      </div>
      
      
  {/* FEATURED PRODUCTS */}

      <div class="site-section bg-light">
        <div class="container">

          <div class="row mb-5 justify-content-center">
            <div class="col-md-6 text-center">
              <h3 class="section-sub-title">Awesome Products</h3>
              <h2 class="section-title mb-3">Featured Products</h2>
              <p>This is list of the featured products</p>
            </div>
          </div>
          {this.state.categories.slice(0,2).map(category=>{
          return (
          <div class="bg-white py-4 mb-4">
            <div class="row mx-4 my-4 product-item-2 align-items-start">
              <div class="col-md-6 mb-5 mb-md-0">
                <img src="assets/images/questionmark.png" alt="" class="img-fluid"/>
              </div>
              <div class="col-md-5 ml-auto product-title-wrap">
                <span class="number">01.</span>
                <h3 class="text-black mb-4 font-weight-bold">About This Product</h3>
                <p class="mb-4">{category.description}</p>
                
                <div class="mb-4"> 
                  <h3 class="text-black font-weight-bold h5">Price:</h3>
                  <div class="price"><del class="mr-2">$269.00</del> $69.00</div>
                </div>
                <p>
                  <a href="/#" class="btn btn-black btn-outline-black rounded-0 d-block mb-2 mb-lg-0 d-lg-inline-block">View Details</a>
                  <a href="/#" class="btn btn-black rounded-0 d-block d-lg-inline-block">Add To Cart</a>
                </p>
              </div>
            </div>
          </div>
            )
          })
        }
        </div>
      </div>
  
  
      <div class="site-section" id="about-section">
        <div class="container">
          <div class="row align-items-lg-center">
            <div class="col-md-8 mb-5 mb-lg-0 position-relative">
              <img src="assets/images/about_1.jpg" class="img-fluid" alt=""/>
              <div class="experience">
                <span class="year">Trusted Merchant</span>
                <span class="caption">for 50 years</span>
              </div>
            </div>
            <div class="col-md-3 ml-auto">
              <h3 class="section-sub-title"></h3>
              <h2 class="section-title mb-3">About Us</h2>
              <p class="mb-4">!!Description about us!!</p>
              <p><a href="/#" class="btn btn-black btn-black--hover rounded-0">Learn More</a></p>
            </div>
          </div>
        </div>
      </div>
  
{/* Team Section */}
  
      <div class="site-section border-bottom" id="team-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-12 text-center">
              <h3 class="section-sub-title">Team</h3>
              <h2 class="section-title mb-3">Members</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-6 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
              <div class="person text-center">
                <img src="assets/images/questionmark_profile.png" alt="" class="img-fluid rounded w-75 mb-3"/>
                <h3>Ryo yenata</h3>
                <p class="position text-muted">Student</p>
                <p class="mb-4">Description that i need to put in</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
              <div class="person text-center">
                <img src="assets/images/questionmark_profile.png" alt="" class="img-fluid rounded w-75 mb-3"/>
                <h3>Jotika adhisthana</h3>
                <p class="position text-muted">Student</p>
                <p class="mb-4">Description that i need to put in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  
  
      <div class="site-section bg-light" id="services-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-12 text-center">
              <h3 class="section-sub-title">Programs</h3>
              <h2 class="section-title mb-3">Programs used</h2>
            </div>
          </div>
          <div class="row align-items-stretch">
            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
              <div class="unit-4 d-flex">
                <div class="unit-4-icon mr-4">
                <img src="assets/images/react_logo.jpg" alt="" class="img-fluid rounded w-75 mb-3"/>
                </div>
                <div>
                  <h3>React Native</h3>
                  <p>React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.</p>
                  <p><a href="https://reactjs.org/docs/getting-started.html">Learn More</a></p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="unit-4 d-flex">
                <div class="unit-4-icon mr-4">
                <img src="assets/images/laravel_logo.png" alt="" class="img-fluid rounded w-75 mb-3"/>
                </div>
                <div>
                  <h3>Laravel</h3>
                  <p>Laravel is a web application framework with expressive, elegant syntax. It is an open-source PHP web framework.</p>
                  <p><a href="https://laravel.com/docs/7.x">Learn More</a></p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div class="unit-4 d-flex">
                <div class="unit-4-icon mr-4">
                <img src="assets/images/mysql_logo.png" alt="" class="img-fluid rounded w-75 mb-3"/>
                </div>
                <div>
                  <h3>MySQL</h3>
                  <p>MySQL is an open-source relational database management system.</p>
                  <p><a href="https://dev.mysql.com/doc/">Learn More</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </body>
    
    

    
         
        
        
      )
    }
  }
  


export default Landing