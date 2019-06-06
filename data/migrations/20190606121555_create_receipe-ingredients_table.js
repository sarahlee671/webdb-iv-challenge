
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('recipe_ingredients', tbl => {
            tbl.increments(); //primary key id

            tbl //foreign key that refers to recipe_id
                .integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE');

            tbl //foreign key that refers to ingredient_id
                .integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onUpdate('CASCADE')

            tbl //needed quantity of ingredient
                .float('quantity')
                .notNullable()
        })
  
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
  
};
