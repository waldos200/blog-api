
exports.up = function(knex) {
  return knex.schema.table('users', (table) => {
      table.string('password').nullable();
  })
};

exports.down = function(knex) {
    return knex.schema.table('users', (table) => {
        table.dropColumn('password');
    })
};
