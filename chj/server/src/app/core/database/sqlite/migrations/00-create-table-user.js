const _knex = require('knex');

module.exports.up = (_knex) => {
    return _knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('name', 30).notNullable();
        table.string('surname', 30).notNullable();
        table.date('birthday').notNullable();
        table.string('email', 50).notNullable();
        table.string('photo', 50).nullable();
        table.integer('office', 2).notNullable();
        table.string('company', 50).nullable();
    });
};

module.exports.down = (_knex) => {
    return _knex.schema.dropTable('users');
}