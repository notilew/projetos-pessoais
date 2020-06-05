import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('name', 30).notNullable();
        table.string('email', 50).notNullable();
        table.string('whatsapp', 16).notNullable();
        table.string('image', 255).notNullable();
        table.string('number', 5).notNullable();
        table.string('city', 255).notNullable();
        table.string('uf', 2).notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('points');
}