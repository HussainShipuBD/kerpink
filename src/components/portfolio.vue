<template>
    <div>
        <div class="_1main_content">
            <!-- Banner -->
            <div class="_2banner _contact_banner _services_banner">
                <div class="container">
                    <div class="_2banner_main">
                        <h2 class="_2banner_title">Portfolio</h2>
                        <ul class="_2banner_list">
                            <!-- <li>
                                <router-link to="/">Home</router-link>
                            </li> -->

                            <li class="_active">Portfolio</li>
                        </ul>

                        <div class="_2banner_pic">
                            <img class="_2banner_img" src="/static/img/contact.png" alt="" title="">
                        </div>
                    </div>
                </div>
            </div>
            <!-- Banner -->
            
            <!-- Profile main -->
            <div class="_porfolio">
                <div class="container">
                    <div class="row">
                        <!-- Items -->
                        <div v-for="(items,  index) in 6" :key="index" class="col-12 col-md-4 col-lg-4">
                            <router-link to="/portfolioDetails" class="_porfolio_card">
                                <div class="_porfolio_card_pic">
                                    <img class="_porfolio_card_img" src="/static/img/why.png" alt="" title="">
                                </div>

                                <div class="_porfolio_card_bottom">
                                    <p class="_porfolio_card_title">Commodo facilisi sed sit arcu consectetur imperdiet eu.</p>
                                    <p class="_porfolio_card_text">
                                        Commodo facilisi sed sit arcu consectetur imperdiet eu. Eu nibh amet at aenean mi lectus.et non cras tristique justo. Placerat tempor, enim posuere curabitur.
                                    </p>
                                </div>
                            </router-link>
                        </div>
                        <!-- Items -->
                    </div>
                </div>
            </div>
            <!-- Profile main -->
        </div>
    </div>
</template>