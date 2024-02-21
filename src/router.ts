import { Router, Request, Response } from 'express';
import { createMovie, findMovieById, getAllMovies, removeMovie } from './controllers/movie.controller';

// middleware
import { validate } from './middleware/validation.middleware';
import { movieCreateValidation } from './middleware/movieValidation.middleware';

const router = Router();

export default router
    .get('/test', (req: Request, res: Response) => {
        res.status(200).send('Hello World');
    })
    .post('/movie', movieCreateValidation(), validate, createMovie) 
    .get('/movie/:id', findMovieById) 
    .get('/movie', getAllMovies) 
    .delete('/movie/:id', removeMovie);