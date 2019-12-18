<template>
    <div class='product'>
        <router-link :to='{name: "recipe", params: {"id": recipe.id}}'>
            <div data-test='recipe-name' class='product-name'>{{ recipe.name }}</div>
            <br/>
            <img class='product-thumb' :src='"./../assets/images/recipes/" + recipe.id + ".jpg"' />
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'ShowRecipe',
    props: ['recipe']
};
</script>

<style scoped>

</style>