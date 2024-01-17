<template>
    <div>
        <div class="_1main_content">
            <!-- Banner -->
            <div class="_2banner">
                <div class="container">
                    <div class="_2banner_main">
                        <h2 class="_2banner_title">About Us</h2>
                        <p class="_2banner_text">About us</p>
                    </div>
                </div>
            </div>
            <!-- Banner -->

            <!-- Business card -->
            <section class="_business">
                <div class="container">
                    <div class="row">
                        <!-- Items -->
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="_business_card">
                                <div class="_business_card_icon">
                                    <img class="_business_card_icon_img" src="/static/img/_high.png" alt="" title="">
                                </div>

                                <div class="_business_card_details">
                                    <p class="_business_card_title">Business Growth</p>
                                    <p class="_business_card_text">The digital world is one of the most effective ways to reach new and current customers. 
                                    We help small businesses cultivate their 
                                    online presence with effective digital marketing strategies, engaging web designs, search engine optimization.</p>
                                </div>
                            </div>
                        </div>
                        <!-- Items -->
                        <!-- Items -->
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="_business_card _before">
                                <div class="_business_card_icon">
                                    <img class="_business_card_icon_img" src="/static/img/strategy.png" alt="" title="">
                                </div>

                                <div class="_business_card_details">
                                    <p class="_business_card_title">Strategy Process</p>
                                    <p class="_business_card_text">Our process starts with evaluating your current structure, finding what’s working and 
                                    what’s not working, present our suggestions, implementation of suggesting, evaluate implementation, making tweaks.</p>
                                </div>
                            </div>
                        </div>
                        <!-- Items -->
                        <!-- Items -->
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="_business_card">
                                <div class="_business_card_icon">
                                    <img class="_business_card_icon_img" src="/static/img/Group.png" alt="" title="">
                                </div>

                                <div class="_business_card_details">
                                    <p class="_business_card_title">Customized Plans</p>
                                    <p class="_business_card_text">We understand that every service or plan is not right for every client, because your 
                                    industry, company, or goals may not be the same as other companies. That is the reason our team take the time to 
                                    develop concepts that tailored to your company needs.</p>
                                </div>
                            </div>
                        </div>
                        <!-- Items -->
                    </div>
                </div>
            </section>
            <!-- Business card -->

            <!-- Working Hard -->
            <section class="_workingHard">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-6">
                            <div class="_workingHard_left">
                                <div class="_workingHard_left_pic">
                                    <img class="_workingHard_left_img" src="/static/img/one.png" alt="" title="">
                                    <img class="_workingHard_left_img_two" src="/static/img/two.png" alt="" title="">
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-6">
                            <div class="_workingHard_right">
                                <p class="_workingHard_right_we">We Are Charger Marketing</p>
                                <h2 class="_workingHard_right_title">Working Hard For Your Business</h2>
                                <p class="_workingHard_right_text">Our reputation is built on our work ethic, creativity, and desire to help clients succeed. 
                                We offer total transparency. Let us handle your digital needs so you can focus on your business. We’ll be here every step of the way.</p>

                                <div class="_workingHard_right_slider_all">
                                    <div class="_workingHard_right_slider">
                                        <p class="_workingHard_right_slider_title">Digital Marketing</p>
                                        <Slider v-model="value1"></Slider>
                                    </div>
                                    <div class="_workingHard_right_slider">
                                        <p class="_workingHard_right_slider_title">Web Design</p>
                                        <Slider v-model="value1"></Slider>
                                    </div>
                                    <div class="_workingHard_right_slider">
                                        <p class="_workingHard_right_slider_title">SEO</p>
                                        <Slider v-model="value1"></Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Working Hard -->

            <!-- See our -->
            <section class="_seeOur">
                <div class="container">
                    <h2 class="_seeOur_title">See Our Latest Projects</h2>

                    <div class="_seeOur_icon">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
            </section>
            <!-- See our -->

            <!-- Why choose -->
            <div class="_whyChoose">
                <div class="container">
                    <h2 class="_whyChoose_title">There are many companies but why choose<br/><span> Kerpink Digital?</span></h2>

                    <div class="row">
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="_whyChoose_card">
                                <p class="_whyChoose_card_text">Every work at our Charger Marketing is personally driven to perform at the highest level. We ensure that our clients are provided with the best personal customer service.</p>
                            </div>
                            <div class="_whyChoose_card _primary">
                                <p class="_whyChoose_card_text">We take time to understand our client business needs. Every company we work with can expect services and plans that are tailored to fit their digital needs.</p>
                            </div>
                            <div class="_whyChoose_card">
                                <p class="_whyChoose_card_text">At Charger Marketing, our vision is to help our clients connect with consumers who seek their products and services offered.</p>
                            </div>
                        </div>

                        <div class="col-12 col-md-8 col-lg-8">
                            <div class="_whyChoose_pic">
                                <img class="_whyChoose_img" src="/static/img/why.png" alt="" title="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Why choose -->
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                value1: 100,
            }
        }
    }
</script>