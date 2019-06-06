
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_id: 1, step: 1,  description: "Make Dough" },
        {recipe_id: 1, step: 2, description: "Bake for 45 minutes"},
        {recipe_id: 1, step: 3, description: "put sauce cheese and pepperoni and bake for another 15 minutes"},
        {recipe_id: 2, step: 1,  description: "Make Dough" },
        {recipe_id: 2, step: 2, description: "Bake for 45 minutes"},
        {recipe_id: 2, step: 3, description: "put sauce cheese and bake for another 15 minutes"},
        {recipe_id: 3, step: 1,  description: "instructions for clam chowder step 1" },
        {recipe_id: 3, step: 2, description: "instructions step 2"},
        {recipe_id: 3, step: 3, description: "instructions step 3"},
        {recipe_id: 4, step: 1,  description: "instructions for Minestrone soup step 1" },
        {recipe_id: 4, step: 2, description: "instructions step 2"},
        {recipe_id: 4, step: 3, description: "instructions step 3"},
        {recipe_id: 5, step: 1,  description: "instructions for chicken noodle soup step 1" },
        {recipe_id: 5, step: 2, description: "instructions step 2"},
        {recipe_id: 5, step: 3, description: "instructions step 3"},
        {recipe_id: 6, step: 1,  description: "instructions for Fish taco step 1" },
        {recipe_id: 6, step: 2, description: "instructions step 2"},
        {recipe_id: 6, step: 3, description: "instructions step 3"},
        {recipe_id: 7, step: 1,  description: "instructions for ground beef taco step 1" },
        {recipe_id: 7, step: 2, description: "instructions step 2"},
        {recipe_id: 7, step: 3, description: "instructions step 3"},
      ])
    });
};
