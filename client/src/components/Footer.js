import React , {Component} from 'react'

class Footer extends Component{
    render(){
        return(
            <footer class="site-footer bg-dark">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-5">
                  <h2 class="footer-heading mb-4">About Us</h2>
                  <p>This is a project for Web Development Course. Made by Ryo yenata & Jotika Adhisthana by using React Framework as the frontend and Laravel as backend.</p>
                </div>
                <div class="col-md-3">
                  <h2 class="footer-heading mb-4">Quick Links</h2>
                  <ul class="list-unstyled">
                    <li><a href="/about">About Us</a></li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h2 class="footer-heading mb-4">Follow Us</h2>
                  <a href="https://facebook.com" class="pl-0 pr-3"><span class="icon-facebook"></span></a>
                  <a href="https://twitter.com" class="pl-3 pr-3"><span class="icon-twitter"></span></a>
                  <a href="https://instagram.com" class="pl-3 pr-3"><span class="icon-instagram"></span></a>
                  <a href="https://linkedin.com" class="pl-3 pr-3"><span class="icon-linkedin"></span></a>
                </div>
              </div>
            </div>
            {/* <div class="col-md-3 ml-auto">
              <h2 class="footer-heading mb-4">Featured Product</h2>
              <a href="/#"><img src="assets/images/product_1_bg.jpg" alt="" class="img-fluid mb-3"/></a>
              <h4 class="h5">Leather Brown Shoe</h4>
              <strong class="text-black mb-3 d-inline-block">$60.00</strong>
              <p><a href="/#" class="btn btn-black rounded-0">Add to Cart</a></p>
            </div> */}
          </div>
        </div>
      </footer>
        )
    }
}

export default Footer