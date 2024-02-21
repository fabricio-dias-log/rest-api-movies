import express from 'express';
import config from 'config';
import router from './router';
import db from '../config/db';

const app = express();
const port = config.get<number>('port');

// JSON
app.use(express.json());

app.use(router);

app.listen(port, async() => {
    await db();
    console.log(`Server is running on port ${port}`);
});


