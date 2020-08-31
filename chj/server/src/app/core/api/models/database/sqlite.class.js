'use strict';

const _path = require('path');
const _dotenv = require('dotenv');
const _knex = require('knex');

class SQLite {

    constructor() {
        if (process.env.NODE_ENV === 'production' || !process.env.NODE_ENV) {
            _dotenv.config({
                path: _path.resolve(__dirname, '..', '..', '..', '..', '..', '..', '.env')
            });
        }

        this.connection = null;
        this.configuration = {
            client: 'sqlite3',
            connection: {
                filename: _path.resolve(__dirname, '..', '..', '..', 'database', 'db.sqlite')
            },
            useNullAsDefault: true
        };
    }

    createConnection() {
        if (!this.connection)
            this.connection = _knex(this.configuration);
    }

    get getConnection() {
        return this.connection;
    }

    get getConfiguration() {
        return this.configuration;
    }

}

module.exports = SQLite;