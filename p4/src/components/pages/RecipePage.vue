<template>
    <div id='product-page' v-if='recipe'>
        <h1 data-test='recipe-name'>{{ recipe.name }}</h1>
        <img
            v-if='recipe.id'
            class='product-thumb'
            :alt='"Recipe image of  " + recipe.name'
            :src='"./../../assets/images/recipes/" + recipe.id + ".jpg"'
        />

        <ul class='cleanList'>
            <li v-for='(recipe, id) in recipes' :key='id'>{{ recipe }}</li>
        </ul>
        <div class="list-type1">
            <ul>
                <li v-for='(ingredient,id) in recipe.ingredients' :key='id'><a href="#">{{ ingredient }}</a></li>
            </ul>
        </div>
        <div><span class='price'>Recipe By:</span><span class='author'>{{ recipe.recipeBy }}</span></div>

        <button data-test='add_to_fav_button' @click='addToCart(recipe.id)'>Add to favorite</button>

        <transition name='fade'>
            <div class='alert' v-if='addAlert'>Your favorite has been updated!</div>
        </transition>

         <transition name='fade'>
            <div class='form-feedback-error' v-if='exist'>Your favorite has been added already</div>
        </transition>

        <router-link :to='"/recipes"'>&larr; Return to all recipes</router-link>
    </div>
</template>

<script>
import Favorite from './../../Favorite.js';
import * as app from './../../app.js';

export default {
    name: 'RecipePage',
    props: ['id'],
    data: function(){
        return {

            recipe: null,
            recipes: null,
            addAlert: false,
            exist: false
        };
    },
    mounted(){
          app.axios
            .get(app.config.api + '/recipes/' + this.id)
            .then(response => {
                this.recipe = response.data;
            });
    },
    methods:{
        addToCart: function(rcipeId){
            let favorite = new Favorite();
            if(!favorite.isExist(rcipeId)){
                favorite.add(rcipeId);
                this.$store.commit('setFavItemNumber', favorite.count())
                  this.addAlert = true;
            }
            else{
                this.exist = true;
            }
            setTimeout(()=> (this.addAlert = false), 2000);
            setTimeout(()=> (this.exist = false), 2000);
        },
    }
}
</script>

<style scoped>

</style>