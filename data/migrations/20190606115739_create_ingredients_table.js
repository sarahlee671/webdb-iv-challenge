
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('ingredients', tbl => {
            tbl.increments(); //primary key id

            tbl //ingredient name
                .string('name')
                .notNullable();
        })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('ingredients');
  
};
