
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'Pizza'},
        {name: 'Soup'},
        {name: 'tacos'}
      ]);
    });
};
