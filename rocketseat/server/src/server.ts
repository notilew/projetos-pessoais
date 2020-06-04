import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    const users = [{
        name: 'wellington',
        surname: 'felix'
    }, {
        name: 'palloma',
        surname: 'felix'
    }, {
        name: 'maria',
        surname: 'rita'
    }];

    response.json(users);
});

app.listen(3333);