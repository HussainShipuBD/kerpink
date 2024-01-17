<template>
    <div>
        <div class="_sign_all">
            <div class="row">
                <div class="col-12 col-md-5 col-lg-5 _pad_r_0">
                    <div class="_sign_all_lft">
                        <div class="_sign_all_lft_logo">
                            <img src="/static/img/logo.png" alt="image">
                        </div>

                        <div class="_sign_all_img">
                            <img src="/static/img/login-bg.jpg">
                        </div>
            
                    </div>
                </div>
                <div class="col-12 col-md-7 col-lg-7 _pad_l_0">
                    <div class="_sign_all_r8">
                        <div class="_sign_all_r8_top_crnr">
                            <router-link to="/signUp">Sign Up</router-link>
                        </div>

                        <div class="_sign_all_r8_all">
                            <div class="_sign_all_r8_all_top">
                                <h1>Welcome to Karpink</h1>
                                <p class="_sign_p1">Let’s sign up first for enter into Karpink website. Uh She Up!</p>

                                <ul>
                                    <li>
                                        <a class="_sign_gogl" href="">
                                            <i class="fab fa-google-plus-g"></i>
                                            Continue with Google
                                        </a>
                                    </li>
                                    <li>
                                        <a class="_sign_fb" href="">
                                            <span><i class="fab fa-facebook-square"></i></span>
                                        </a>
                                    </li>
                                </ul>

                                <div class="_or_span_all">
                                    <span class="_or_span">OR</span>
                                </div>
                            </div>

                            <div class="_sign_all_r8_all_info">
                                <div class="row">
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_sign_inpt _inpt1">
                                            <p class="_1label">Email</p>
                                            <Input placeholder="Enter your email"/>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_sign_inpt  _inpt1">
                                            <p class="_1label">Password</p>
                                            <Input type="password" placeholder="Enter your password"/>
                                        </div>
                                    </div>
                                </div>

                                <div class="_sign_btm _dis_flex">
                                    <div class="_sign_btm_lft _dis_flex">
                                        <Checkbox>
                                            <span>Remember Me</span>
                                        </Checkbox>
                                    </div>

                                    <div class="_sign_btm_r8">
                                        <a href="">Forgot Password?</a>
                                    </div>
                                </div>
                                <div class="_mar_t30">
                                    <button class="_1btn _btn_long">Log In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>