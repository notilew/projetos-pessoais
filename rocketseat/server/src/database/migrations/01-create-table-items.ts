import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('title', 30).notNullable();
        table.string('image', 255).notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('items');
}