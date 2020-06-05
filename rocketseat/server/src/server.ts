import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();

/**
 * servindo as rotas da API
 */
app.use(routes);

/**
 * servindo dados do tipo JSON ao receber requisições com esse formato
 */
app.use(express.json());

/**
 * servindo arquivos estáticos
 */
app.use('/assets/img', express.static(path.resolve(__dirname, 'assets', 'img')));

/**
 * levantando servidor na porta :3333
 */
app.listen(3333);

console.log(path.resolve(__dirname, 'assets', 'img'));