// /src/Favorite.js
export default class Favorite {

    /**
     * 
     */
    constructor() {
        // Extract JSON cart string from local storage
        let favorite = localStorage.getItem('favorite');

        // Parse JSON cart String to `items` object
        this.items = (favorite) ? JSON.parse(favorite) : [];
    }

    /**
     * Getter method for items
     */
    getItems() {
        return this.items;
    }

    /**
     * Updates cart in localstorage
     */
    update() {
        localStorage.setItem('favorite', JSON.stringify(this.items))
    }

    /**
     * Add a new item of the given productId
     */
    add(recipeId, quantity = 1) {

        // First see if product is already present
        let item = this.getItem(recipeId)

        if (item) {
            // Product is in cart already; increment quantity by 1
            item.quantity += quantity;

        } else {
            // Product not in cart, add as new item
            this.items.push({
                id: recipeId,
                quantity: quantity
            });
        }

        this.update();
    }

    /**
     * Remove an item from items via productId
     */
    remove(recipeId) {
        let item = this.getItem(recipeId);

        let itemIndex = this.items.indexOf(item);

        if (item) {
            this.items.splice(itemIndex, 1);
            this.update();
        }
    }

    /**
     * Get an item from items via productId
     * Returns null if product does not exist in items
     */
    getItem(productId) {
        return this.items.find(({ id }) => id === productId) || null;
    }
}