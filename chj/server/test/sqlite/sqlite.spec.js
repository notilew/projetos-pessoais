'use strict';

const _assert = require('assert');
const SQLite = require('../../src/app/core/api/models/database/sqlite.class');

describe('Suíte de Testes da Entidade SQLite', () => {
    const sqlite = new SQLite();

    describe('Suíte de Testes de Conexão com Base de Dados', () => {
        beforeEach(() => {
            sqlite.createConnection();
        });

        it('Criando Conexão', () => {
            const actual = sqlite.getConnection;

            _assert.ok(actual);
        });
    });
});