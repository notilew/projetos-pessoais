import { Request, Response } from 'express';
import knex from '../database/connection';

class PointController {

    async create(request: Request, response: Response) {
        const trx = await knex.transaction();

        const {
            name,
            email,
            whatsapp,
            image,
            number,
            city,
            uf,
            latitude,
            longitude,
            items
        } = request.body;

        const point = {
            name,
            email,
            whatsapp,
            image,
            number,
            city,
            uf,
            latitude,
            longitude
        };

        const pointId = await trx('points').insert(point);

        const pointItems = items.map((item: number) => {
            return {
                point_id: pointId[0],
                item_id: item
            }
        });

        await trx('points_items').insert(pointItems);

        await trx.commit();

        return response.json({
            id: pointId[0],
            ...point
        });
    }

    async index(request: Request, response: Response) {
        const { uf, city, items } = request.query;

        const parsedItems = String(items).split(',').map(item => Number(item.trim()));

        const points = await knex('points')
            .join('points_items', 'points.id', '=', 'points_items.point_id')
            .where('uf', String(uf))
            .where('city', String(city))
            .whereIn('points_items.item_id', parsedItems)
            .distinct()
            .select('points.*');

        return response.json(points);
    }

    async show(request: Request, response: Response) {
        const id = request.params.id;

        const point = await knex('points').where({ id }).first();

        if (!point) return response.status(400).json({ message: 'Ponto não encontrado! '});

        const items = await knex('items')
            .join('points_items', 'items.id', '=', 'points_items.item_id')
            .where('points_items.point_id', id)
            .select('title');

        return response.json({ point, items });
    }

}

export default PointController;