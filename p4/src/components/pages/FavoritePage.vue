<template>
    <div id='favorite-page'>
        <h1>Your Favorite</h1>

        <div v-if='items.length == 0'>No items</div>

        <ul data-test='fav-contents' v-else-if='recipes.length > 0' class='cleanList'>
            <li v-for='item in items' :key='item.id'>
                <button data-test='remove-button' @click='removeFromFavorite(item.id)'>Remove</button>
                 <router-link :to='{name: "recipe", params: {"id": item.id}}'>
                    {{ getRecipeDetails(item.id)['name'] }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import * as app from './../../app.js';
export default {
    name: 'FavoritePage',
    data: function() {
        return {
            items: [],
            favorite: null,
            recipes: []
        };
    },
    methods: {
        getRecipeDetails(recipeId) {
            return this.recipes.find(({ id }) => id === recipeId);
        },
        removeFromFavorite: function(recipeId) {
            this.favorite.remove(recipeId);
            this.$store.commit('setFavItemNumber',this.favorite.count())
        }
    },
    mounted() {
        this.favorite = new app.Favorite();
        this.items = this.favorite.getItems();
        // It would be more ideal if we could ping our server-api for *just*
        // the products that are in our cart. However, we don't have that option
        // with our Mock API, so we’re fetching all the product data.
        this.recipes = app.axios
            .get(app.config.api + 'recipes')
            .then(response => (this.recipes = response.data));
    }
};
</script>