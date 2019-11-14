<template>
    <div class='recipe'>
        <router-link :to='{name: "recipe", params: {"id": recipe.id}}'>
            <div class='recipe-name'>{{ recipe.name }}</div>
            <img class='recipe-thumb' :src='"./../assets/images/recipe/" + recipe.id + ".jpg"'/>
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