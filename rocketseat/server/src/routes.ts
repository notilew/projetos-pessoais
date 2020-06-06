import express from 'express';
import PointController from './controller/point.controller';
import ItemController from './controller/item.controller';

const routes = express.Router();

const pointController = new PointController();
const itemController = new ItemController();

/**
 * rotas da classe item
 */
routes.get('/items', itemController.index);

/**
 * rotas da class point
 */
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);
routes.post('/points', pointController.create);

export default routes;