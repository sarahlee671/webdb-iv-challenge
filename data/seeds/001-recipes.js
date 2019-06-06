
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Pepperoni', dish_id: 1},
        {name: 'Veggie Pizza', dish_id: 1},
        {name: 'Clam Chowder', dish_id: 2},
        {name: 'Minestrone', dish_id: 2},
        {name: 'Chicken noodle', dish_id: 2},
        {name: 'Fish tacos', dish_id: 3},
        {name: 'Ground Beef tacos', dish_id: 3}
      ]);
    });
};
