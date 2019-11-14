<template>
  <div id="app">
    <img id='logo' alt="ZipFoods logo" src="./assets/images/zipfoods-logo.png">
    <nav>
        <ul>
            <li v-for='link in links' :key='link'>
                <router-link exact :to='{name: link}'>{{ link }}</router-link>

                <span v-if='link=="cart"'>({{ sharedState.cartCount }})</span>
            </li>
        </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { products } from './products';
import * as app from './app.js';

export default {
  name: 'app',
  components: {},
  data: function(){
    return {
      links: ['home', 'products', 'categories', 'cart'],
      products: products,
      cartCount: null,
      sharedState: app.store
    };
  },
  mounted(){
    this.cart = new app.Cart();
    app.store.cartCount = this.cart.count();

  }
}
</script>

<style lang='scss'>
@import './assets/css/zipfoods.scss';
</style>

