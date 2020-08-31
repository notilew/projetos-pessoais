const assert = require('assert');
const nock = require('nock');

describe('Suíte de Testes da Entidade Usuário', () => {
    describe('Suíte de Testes de CRUD', () => {
        it('Criando um Usuário', () => {
            const user = {
                name: 'wellington',
                surname: 'felix',
                birthday: '1989-06-16',
                email: 'wellington_bhmg@hotmail.com',
                photo: '',
                office: 1,
                company: 'avanço informática ltda'
            }
            const expected = user;
            const actual = null;

            assert.deepEqual(actual, expected);
        });

        /* it('Lendo um Usuário', () => { });
        it('Atualizando um Usuário', () => { });
        it('Deletando um Usuário', () => { }); */
    });
});