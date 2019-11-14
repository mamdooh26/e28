<template>
    <div id='products'>
        <h2>Recipes</h2>
        <show-recipe
            v-for='recipe in recipes'
            :key='recipe.id'
            :recipe='recipe'
        ></show-recipe>
    </div>
</template>

<script>
import ShowRecipe from './../ShowRecipe.vue'
import * as app from './../../app.js';

export default {
    name: 'RecipesPage',
    components: { ShowRecipe },
    data: function(){
        return {
            recipes: null
        }
    },
     mounted(){
          this.recipes = app.axios
            .get(app.config.api + 'recipes')
            .then(response => (this.recipes = response.data));
    }
    
};
</script>

<style scoped>

</style>