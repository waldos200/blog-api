// Este archivo sirve como registro de los cambios de la BD
exports.up = function(knex) {
  // Aqui voy a escribr los camios que quiero hacer a mi BD
  return knex.schema.createTable('users', function (table) {
    table.increments(); // Esto es el id y aparte el primary_key
    table.string('first_name', 150);
    table.string('last_name', 150);
    table.string('email', 150);
    table.date('birth_date'); // yyyy-mm-dd
    table.enu('gender', ['male', 'female']);
  });
};

exports.down = function(knex) {
  // Aqui voy a escribir el codigo que revierta los cambios de arriba
    return knex.schema.dropTableIfExists('users');
};
