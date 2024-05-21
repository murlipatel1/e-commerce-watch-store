import React from 'react'
import './assets/css/styles.css'
const Home = () => {
  return (
    <>
    <div className='hhome'>
    <header class="indexheader" id="header">
      <nav class="indexnav indexcontainer">
          <a href="#" class="nav__logo">
              <i class='bx bxs-watch nav__logo-icon'></i> Watches
          </a>

          <div class="nav__menu" id="nav-menu">
              <ul class="nav__list">
                  <li class="nav__item">
                      <a href="#home" class="nav__link active-link"></a>
                  </li>
                  <li class="nav__item">
                      <a href="#featured" class="nav__link">Featured</a>
                  </li>
                  <li class="nav__item">
                      <a href="#products" class="nav__link">Products</a>
                  </li>
                  <li class="nav__item">
                      <a href="#new" class="nav__link">New</a>
                  </li>
                  <li class="nav__item">
                      <a href="./userlogin" class="nav__link">Login/SignUp</a>
                  </li>
              </ul>

              <div class="nav__close" id="nav-close">
                  <i class='bx bx-x' ></i>
              </div>
          </div>

          <div class="nav__btns">

              <i class='bx bx-moon change-theme' id="theme-button"></i>

              <div class="nav__shop" id="cart-shop">
                  <a href="./adminlogin" class=" nav__link"><h2 class=""><i class='bx bx-male' ></i></h2></a>
              </div>

              <div class="nav__toggle" id="nav-toggle">
                  <i class='bx bx-grid-alt' ></i>
              </div>
          </div>
      </nav>
  </header>


  <main class="indexmain">

      <section class="home" id="home">
          <div class="home__container indexcontainer indexgrid">
              
              <div class="home__img-bg">
                  <marquee behavior="" direction="left">
                  <img src="http://localhost:5000/uploads/myImage-1710781854458.png" alt="" class="home__img"/>
              </marquee>
              </div>
           
              <div class="home__social">
                  <a href="https://www.facebook.com/" target="_blank" class="home__social-link">
                      Facebook
                  </a>
                  <a href="https://twitter.com/" target="_blank" class="home__social-link">
                      Twitter
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" class="home__social-link">
                      Instagram
                  </a>
              </div>

              <div class="home__data">
                  <h1 class=" home__title">NEW WATCH <br/> COLLECTIONS B720</h1>
                  <p class="home__description">
                      Latest arrival of the new imported watches of the B720 series, 
                      with a modern and resistant design.
                  </p>
                  <span class="home__price">$1245</span>

                  <div class="home__btns">
                      <a href="#" class="button button--gray button--small">
                          Discover
                      </a>

                  </div>
              </div>
          </div>
      </section>


      <section class="featured indexsection indexcontainer" id="featured">
          <h2 class="section__title">
              Featured
          </h2>

          <div class="featured__container indexgrid">
              <article class="featured__card">
                  <span class="featured__tag">Sale</span>

                  <img src="http://localhost:5000/uploads/myImage-1710781429484.png" alt="" class="featured__img"/>

                  <div class="featured__data">
                      <h3 class="featured__title">Jazzmaster</h3>
                      <span class="featured__price">$1050</span>
                  </div>

                  <button class="button featured__button">ADD TO CART</button>
              </article>

              <article class="featured__card">
                  <span class="featured__tag">Sale</span>

                  <img src="http://localhost:5000/uploads/myImage-1710781592681.png" alt="" class="featured__img"/>

                  <div class="featured__data">
                      <h3 class="featured__title">Ingersoll</h3>
                      <span class="featured__price">$250</span>
                  </div>

                  <button class="button featured__button">ADD TO CART</button>
              </article>

              <article class="featured__card">
                  <span class="featured__tag">Sale</span>

                  <img src="http://localhost:5000/uploads/myImage-1710781626267.png" alt="" class="featured__img"/>

                  <div class="featured__data">
                      <h3 class="featured__title">Rose gold</h3>
                      <span class="featured__price">$890</span>
                  </div>

                  <button class="button featured__button">ADD TO CART</button>
              </article>
          </div>
      </section>


      <section class="story indexsection indexcontainer">
          <div class="story__container indexgrid">
              <div class="story__data">
                  <h2 class="section__title story__section-title">
                      Our Story
                  </h2>

                  <h1 class=" story__title">
                      Inspirational Watch of <br/> this year
                  </h1>

                  <p class="story__description">
                      The latest and modern watches of this year, is available in various 
                      presentations in this store, discover them now.
                  </p>

                  <a href="#" class="button button--small">Discover</a>
              </div>

              <div class="story__images">
                  <img src="http://localhost:5000/uploads/myImage-1710781899766.png" alt="" class="story__img"/>
                  <div class="story__square"></div>
              </div>
          </div>
      </section>


      <section class="products indexsection indexcontainer" id="products">
          <h2 class=" section__title">
              Products
          </h2>

          <div class="products__container indexgrid">
              <article class="products__card">
                  <img src="assets/img/product1.png" alt="" class="products__img"/>

                  <h3 class="products__title">Spirit rose</h3>
                  <span class="products__price">$1500</span>

                  <button class="products__button">
                      <i class='bx bx-shopping-bag'></i>
                  </button>
              </article>

              <article class="products__card">
                  <img src="assets/img/product2.png" alt="" class="products__img"/>

                  <h3 class="products__title">Khaki pilot</h3>
                  <span class="products__price">$1350</span>

                  <button class="products__button">
                      <i class='bx bx-shopping-bag'></i>
                  </button>
              </article>

              <article class="products__card">
                  <img src="assets/img/product3.png" alt="" class="products__img"/>

                  <h3 class="products__title">Jubilee black</h3>
                  <span class="products__price">$870</span>

                  <button class="products__button">
                      <i class='bx bx-shopping-bag'></i>
                  </button>
              </article>

              <article class="products__card">
                  <img src="assets/img/product4.png" alt="" class="products__img"/>

                  <h3 class="products__title">Fosil me3</h3>
                  <span class="products__price">$650</span>

                  <button class="products__button">
                      <i class='bx bx-shopping-bag'></i>
                  </button>
              </article>

              <article class="products__card">
                  <img src="assets/img/product5.png" alt="" class="products__img"/>

                  <h3 class="products__title">Duchen</h3>
                  <span class="products__price">$950</span>

                  <button class="products__button">
                      <i class='bx bx-shopping-bag'></i>
                  </button>
              </article>
          </div>
      </section>
      <section class="new indexsection indexcontainer" id="new">
          <h2 class=" section__title">
              New Arrivals
          </h2>
          
          <div class="new__container">
              <div class="swiper new-swiper">
                  <div class="swiper-wrapper">
                      <article class="new__card swiper-slide">
                          <span class="new__tag">New</span>
  
                          <img src="http://localhost:5000/uploads/myImage-1710781989232.png" alt="" class="new__img"/>
                          <div class="new__data">
                              <h3 class="new__title">Longines rose</h3>
                              <span class="new__price">$980</span>
                          </div>
                          <button class="button new__button">ADD TO CART</button>
                      </article>

                      <article class="new__card swiper-slide">
                          <span class="new__tag">New</span>
                          <img src="http://localhost:5000/uploads/myImage-1710781989232.png" alt="" class="new__img"/>
                          <div class="new__data">
                              <h3 class="new__title">Jazzmaster</h3>
                              <span class="new__price">$1150</span>
                          </div>
                          <button class="button new__button">ADD TO CART</button>
                      </article>

                      <article class="new__card swiper-slide">
                          <span class="new__tag">New</span>
  
                          <img src="http://localhost:5000/uploads/myImage-1710782036292.png" alt="" class="new__img"/>
                          <div class="new__data">
                              <h3 class="new__title">Dreyfuss gold</h3>
                              <span class="new__price">$750</span>
                          </div>
                          <button class="button new__button">ADD TO CART</button>
                      </article>

                      </div>
              </div>
          </div>
      </section>

      <section class="newsletter indexsection indexcontainer">
          <div class="newsletter__bg indexgrid">
              <div>
                  <h2 class="newsletter__title">Subscribe Our <br/> Newsletter</h2>
                  <p class="newsletter__description">
                      Don't miss out on your discounts. Subscribe to our email 
                      newsletter to get the best offers, discounts, coupons, 
                      gifts and much more.
                  </p>
              </div>

              <form id="myForm" class="newsletter__subscribe">
                  <input name='email' type="email" placeholder="Enter your email" class="newsletter__input"/>
                  <button class="button submit">
                      SUBSCRIBE
                  </button>
              </form>
          </div>
      </section>
  </main>

  <footer class="footer indexsection">
      <div class="footer__container indexcontainer indexgrid">
          <div class="footer__content">
              <h3 class="footer__title">Our information</h3>

              <ul class="footer__list">
                  <li>1234 - Peru</li>
                  <li>La Libertad 43210</li>
                  <li>123-456-789</li>
              </ul>
          </div>
          <div class="footer__content">
              <h3 class="footer__title">About Us</h3>

              <ul class="footer__links">
                  <li>
                      <a href="./supportcenter" class="footer__link">Support Center</a>
                  </li>
                  <li>
                      <a href="./supportcenter" class="footer__link">Customer Support</a>
                  </li>
                  <li>
                      <a href="./cusotmer_feedback.html" class="footer__link">Cunstomer Feedback</a>
                  </li>
                  <li>
                      <a href="#" class="footer__link">Copy Right</a>
                  </li>
              </ul>
          </div>

          <div class="footer__content">
              <h3 class="footer__title">Social</h3>

              <ul class="footer__social">
                  <a href="https://www.facebook.com/" target="_blank" class="footer__social-link">
                      <i class='bx bxl-facebook'></i>
                  </a>

                  <a href="https://twitter.com/" target="_blank" class="footer__social-link">
                      <i class='bx bxl-twitter' ></i>
                  </a>

                  <a href="https://www.instagram.com/" target="_blank" class="footer__social-link">
                      <i class='bx bxl-instagram' ></i>
                  </a>
              </ul>
          </div>
      </div>

      <span class="footer__copy">&#169; Bedimcode. All rights reserved</span>
  </footer>


  <a href="#" class="scrollup" id="scroll-up"> 
      <i class='bx bx-up-arrow-alt scrollup__icon' ></i>
  </a>
  </div>
    </>
  )
}

export default Home