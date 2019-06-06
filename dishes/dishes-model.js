const db = require('../data/dbConfig.js');

module.exports = {
    getDishes,
    getDish,
    addDish,
};

function getDishes() {
    return db('dishes');
}

function getDish(id) {
    return db('dishes')
        .join('dishes', 'recipes.dish_id', 'dishes.id')
        .select('dishes.id', 'dishes.name', {recipe: 'recipes.name'})
        .where('dishes.id', id)
        .first();
}

function addDish(dish) {
    return db('dishes')
        .insert(dish, 'id')
        .then(([id]) => {
            return getDish(id);
        });
}

