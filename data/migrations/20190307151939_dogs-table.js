
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dogs', t => {
    t.increments();
    t.string('name');
    t.integer('age');
    t.string('breed');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dogs');
};
