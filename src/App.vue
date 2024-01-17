<template>
  <div id="app">
    <div id="main-wrapper">
      <!-- Menu Header -->
      <div v-if="$route.path != '/login' && $route.path != '/signUp'" class="_menu_header">
        <div class="container">
          <div class="_menu_header_main">
            <div class="row align-items-center">
              <div class="col-12 col-md-6 col-lg">
                <div class="_menu_header_left">
                  <p class="_menu_header_left_text">Your local digital marketing agency.</p>
                </div>
              </div>

              <div class="col-12 col-md col-lg">
                <div class="_menu_header_right">
                  <ul class="_menu_header_list">
                    <li>
                      <a href=""><i style="transform: rotate(96deg);" class="fas fa-phone"></i> (619) 431-0985 </a>
                    </li>
                    <li>
                      <a href=""><i class="fas fa-envelope"></i> INFO@KERPINKDIGITAL.COM</a>
                    </li>
                    <li><a class="follow" href="">Follow Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Menu Header -->

      <!-- Menu -->
      <nav v-if="$route.path != '/login' && $route.path != '/signUp'" class="_menu">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-auto col-md-auto col-lg-auto">
              <div class="_menu_logo">
                <img class="_menu_logo_img" src="/static/img/logo.png" alt="" title="">
              </div>
            </div>

            <div class="col-12 col-md col-lg _only_desk">
              <div class="_menu_right">
                <ul class="_menu_list">
                  <li><router-link to="/about">ABOUT</router-link></li>
                  <li><router-link to="/services">SERVICES</router-link></li>
                  <li><router-link to="/portfolio">PORTFOLIO</router-link></li>
                  <li><router-link to="/">BLOG</router-link></li>
                  <li><router-link to="/contact">CONTACT</router-link></li>
                  <li>
                    <router-link to="/orderPage">ORDER</router-link>
                  </li>
                  <li>
                    <router-link to="/login">LOG ON</router-link>
                  </li>
                  <li><button class="_1btn" type="button">GET QUOTE</button></li>
                </ul>
              </div>
            </div>

            <!-- Mobile and Ipad button -->
            <div class="col col-md col-lg _mobile_button_main">
              <p @click="isMobileMenu = true" class="_mobile_button"><i class="fas fa-th-list"></i></p>
            </div>
            <!-- Mobile and Ipad button -->
          </div>
        </div>
      </nav>
      <!-- Menu -->

      <!-- Mobile and ipad menu -->
      <div v-if="$route.path != '/login' && $route.path != '/signUp'" :class="isMobileMenu ? '_mobileMenuOpen _mobileMenu': '_mobileMenu'">
        <div class="_mobileMenu_main">
          <ul class="_mobileMenu_list _mar_b30">
            <li class="_active">
              <router-link to="/about">ABOUT</router-link>
            </li>
            <li>
              <router-link to="/services">SERVICES</router-link>
            </li>
            <li>
              <router-link to="/">PROJECTS</router-link>
            </li>
            <li>
              <router-link to="/">BLOG</router-link>
            </li>
            <li>
              <router-link to="/contact">CONTACT</router-link>
            </li>
            <li>
              <router-link to="/orderPage">Order</router-link>
            </li>
            <li>
              <router-link to="/login">Log in</router-link>
            </li>
            <li><button class="_1btn" type="button">GET QUOTE</button></li>
          </ul>
          
          <ul class="_mobileMenu_list _only_mobile">
            <li>
              <a href=""><i style="transform: rotate(96deg);" class="fas fa-phone"></i> (619) 431-0985 </a>
            </li>
            <li>
              <a href=""><i class="fas fa-envelope"></i> INFO@KERPINKDIGITAL.COM</a>
            </li>
            <li><a class="follow" href="">Follow Us</a></li>
          </ul>

          <p class="_menu_mobile_left_text">Your local digital marketing agency.</p>
        </div>
        <p @click="isMobileMenu = false" class="_mobileMenu_close"><i class="fas fa-times"></i></p>
        <div @click="isMobileMenu = false" class="_mobileMenu_overlay"></div>
      </div>
      <!-- Mobile and ipad menu -->

      <div class="_main_layout">
        <router-view></router-view>
      </div>

      <!-- Footer -->
      <div v-if="$route.path != '/login' && $route.path != '/signUp'" class="_footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-4 col-lg-4 _footer_left">
              <div class="_footer_left_main">
                <div class="_footer_left_logo">
                  <img class="_footer_left_logo_img" src="/static/img/logo.png" alt="" title="">
                </div>

                <ul class="_footer_social">
                  <li>
                    <a href=""><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href=""><i class="fab fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                  </li>
                </ul>

                <p class="_footer_copy">Copyright © 2021</p>
                <p class="_footer_your">Your digital marketing agency</p>
              </div>
            </div>

            <div class="col-12 col-md-8 col-lg-8">
              <div class="_footer_right">
                <ul class="_footer_right_list">
                  <li class="_active"><router-link to="/">Home</router-link></li>
                  <li><router-link to="/services">Services</router-link></li>
                  <li><router-link to="/">Blog</router-link></li>
                  <li><router-link to="/about">About</router-link></li>
                  <li><router-link to="/portfolio">Portfolio</router-link></li>
                  <li><router-link to="/contact">Contact</router-link></li>
                </ul>

                <div class="_footer_bottom">
                  <ul class="_footer_bottom_list">
                    <li><a href=""><i class="fas fa-phone" style="transform: rotate(96deg);"></i> (619) 431-0985 </a></li>
                    <li><a href=""><i class="fas fa-at"></i> INFO@KERPINKDIGITAL.COM </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer -->
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isMobileMenu: false
    }
  },

  methods:{
    
  },
  
  created(){
    
  }
}
</script>