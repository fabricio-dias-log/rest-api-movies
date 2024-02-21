require('dotenv').config();

import express from 'express';
import config from 'config';
import router from './router';
import db from '../config/db';
import Logger from '../config/logger';

// middleware
import morganMiddleware from './middleware/morgan.middleware';

const app = express();
const port = config.get<number>('port');

// JSON
app.use(express.json());
app.use(morganMiddleware);
app.use("/api",router);


app.listen(port, async() => {
    await db();
    Logger.info(`Server is running on port ${port}`);
});


