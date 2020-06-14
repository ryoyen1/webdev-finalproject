import React, {Component} from 'react'

export default class About extends Component{
    render(){
        return(
            <div>
                <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
                <div class="site-wrap">
                    <div class="site-section" id="products-section"></div>
                        <div class="container">
                            <div class="row mb-5 justify-content-center">
                                <div class="col-md-6 text-center">
                                    {/* <h3 class="section-sub-title">Popular Products</h3> */}
                                    <h2 class="section-title mb-3">About us</h2>
                                    <p>This is the about us page.</p>
                                </div>
                            </div>
                <p>This is a website to order stocks for a company named Unyu Cheese Tea. This is made by two people Ryo yenata and Jotika Adhisthana Yuwono. This is also a final project for a course in Binus International course named Web Application and Development Security. This website is also made using React framework for the frontend and Laravel as a backend.</p>
            </div>
            </div>
            </body>
            </div>
        )
    }
}