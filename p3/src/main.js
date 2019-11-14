import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ProductsPage from './components/pages/RecipesPage.vue'
import HomePage from './components/pages/HomePage.vue'
import ProductPage from './components/pages/RecipePage.vue'
import FavoritePage from './components/pages/FavoritePage.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/recipes', component: ProductsPage, name: 'recipes' },
  { path: '/recipe/:id', component: ProductPage, name: 'recipe', props: true },
  { path: '/favorite', component: FavoritePage, name: 'favorite'}
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
