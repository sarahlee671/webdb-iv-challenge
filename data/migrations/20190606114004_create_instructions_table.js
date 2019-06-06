
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('instructions', tbl => {
            tbl.increments(); //primary key id

            tbl //foreign key that references receipe_id
                .integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE');
            tbl //step
                .integer('step')
                .notNullable();
            tbl //description of instructions
                .string('description', 500)
                .notNullable()
        })
  
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('instructions')
  
};
