const _path = require('path');

const configuration = {
    client: 'sqlite3',
    connection: {
        filename: _path.resolve(__dirname, 'db.sqlite')
    },
    migrations: {
        directory: _path.resolve(__dirname, 'migrations')
    },
    seeds: {
        directory: _path.resolve(__dirname, 'seeds')
    },
}

module.exports = configuration;