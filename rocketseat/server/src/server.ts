import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';
import path from 'path';

const app = express();
/**
 * servindo dados do tipo JSON ao receber requisições com esse formato
 */
app.use(bodyParser.json());

/**
 * servindo detalhamento de recursos fornecidos pela API
 */
app.use(cors());

/**
 * servindo as rotas da API
 */
app.use(routes);

/**
 * servindo arquivos estáticos
 */
app.use('/assets/img', express.static(path.resolve(__dirname, 'assets', 'img')));

/**
 * levantando servidor na porta :3333
 */
app.listen(3333);