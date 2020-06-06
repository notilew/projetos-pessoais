import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemController {

    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');

        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                imageURL: `http://localhost:3333/assets/img/${item.image}`
            }
        });

        return response.json(serializedItems);
    }

}

export default ItemController;