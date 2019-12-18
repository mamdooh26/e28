<template>
  <div id="app">
    <img id='logo' alt="p3 logo" src="./assets/images/recipeLogo.png">
    <nav>
        <ul>
            <li v-for='link in links' :key='link'>
                <router-link exact :to='{name: link}'>{{ link }}</router-link>

                <span v-if='link=="favorite"' data-test="fav-count">({{favItemNumber}})</span>
            </li>
        </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import * as app from './app.js';

export default {
  name: 'app',
  components: {},
  data: function(){
    return {
      links: ['home', 'recipes','favorite','contactUs'],
      sharedState: app.store
    };
  },
  computed: {
    favItemNumber: function(){
      return this.$store.state.favItemNumber
    }
  },
  mounted(){
    this.favorite = new app.Favorite();
    this.$store.commit('setFavItemNumber',this.favorite.count())
  }
}
</script>

<style lang='scss'>
@import './assets/css/p3.scss';
</style>

