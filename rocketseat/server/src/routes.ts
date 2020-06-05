import express from 'express';
import connection from './database/connection';

const routes = express.Router();

routes.get('/items', async (request, response) => {
    const items = await connection('items').select('*');

    return response.json(items);
});

export default routes;