import * as dotenv from 'dotenv';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as cors from 'cors';

import api from './routes';
import { SERVER_PORT } from '../lib/constants';

// config
dotenv.config();

const app = express();

// middleware
app.use(logger('dev'));
app.use(cors({ origin: '*' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/api', api);

app.get('/', (_, res) => {
  res.status(200).send('🟢 The Werewolf Game server is healthy. 🟢');
});

app.listen(SERVER_PORT, () =>
  console.info(`Server is running on port ${SERVER_PORT}.`),
);
