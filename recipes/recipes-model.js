const db = require('../data/dbConfig.js');

module.exports = {
    getRecipes,
    addRecipe
};

function getRecipes() {
    return db('recipes')
        .join('dishes', 'recipes.dish_id', 'dishes.id')
        .select('recipes.id', recipes.name, {dish: dishes.name})
}


function addRecipe(recipe) {
    return db('recipes')
        .insert(recipe)
}
