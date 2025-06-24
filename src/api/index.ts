import * as dotenv from 'dotenv';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as cors from 'cors';

import api from './routes';

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
  res.send('🟢 The Werewolf Game server is healthy. 🟢').status(200);
});

app.listen(8000, () => console.info('Server is running on port 8000.'));
