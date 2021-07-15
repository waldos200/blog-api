// Este archivo se crea poniengo en la consola 'knex migrate:make posts'
exports.up = function(knex) { //knex migrate:latest (en la consola)
  return knex.schema.createTable('posts', function(table){
      table.increments();
      table.string('title', 200);
      table.text('body', 'longtext');
      table.integer('user_id').notNullable().references('id').inTable('users').onDelete('cascade');
      table.string('category', 100);
      table.timestamps('created_at');
  });
};

exports.down = function(knex) { //knex migrate:rollback (en la consola)
  return knex.schema.dropTableIfExist('posts');
};
