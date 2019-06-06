
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'onions'},
        {name: 'flour'},
        {name: 'marinara sauce'},
        {name: 'water'},
        {name: 'tomatoes'},
        {name: 'garlic'},
        {name: 'cheese'},
        {name: 'pepperoni'},
        {name: 'clam'},
        {name: 'milk'},
        {name: 'potatoes'},
        {name: 'beef'},
        {name: 'fish'},
        {name: 'salsa'},
        {name: 'taco shells'},
        {name: 'eggs'},
        {name: 'salt'},
        {name: 'chicken'},
        {name: 'pasta'}
        
      ]);
    });
};
