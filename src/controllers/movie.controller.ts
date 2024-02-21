import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";
import Logger from "../../config/logger";

export const createMovie = async (req: Request, res: Response) => {
    try {
        const movie = new MovieModel(req.body);
        console.log(movie);
        // await movie.save();
        // res.status(201).json(movie);
    } catch (e: any) {
        Logger.error(e.message);
        res.status(500).send("Server Error");
    }

}

export const getMovies = async (req: Request, res: Response) => {
    try {
        const movies = await MovieModel.find();
        res.status(200).json(movies);
    } catch (e: any) {
        Logger.error(e.message);
        res.status(500).send("Server Error");
    }
};