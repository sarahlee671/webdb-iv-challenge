
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();

            tbl
                .string('name', 128)
                .notNullable()
                .unique();
            tbl //this is the foreign key referencing dish_id
                .integer('dish_id')
                .unsigned()
                .references('id')
                .inTable('dishes')
                .onDelete('RESTRICT') //restricts it from deleting if it is being referenced, instead throws an error
                .onUpdate('CASCADE'); //cascades the changes from the parent
        })
  
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('recipes')
  
};
