import { Router, Request, Response } from 'express';
import { createMovie } from './controllers/movie.controller';

const router = Router();

export default router
    .get('/test', (req: Request, res: Response) => {
        res.status(200).send('Hello World');
    })
    .post('/movie', createMovie) 