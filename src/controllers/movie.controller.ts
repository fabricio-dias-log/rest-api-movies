import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";
import Logger from "../../config/logger";

export const createMovie = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const movie = await MovieModel.create(data);

        res.status(201).json(movie);
    } catch (e: any) {
        Logger.error(e.message);
        res.status(500).send("Server Error");
    }
}

export async function findMovieById(req: Request, res: Response) {
    try {
        const id  = req.params.id;
        const movie = await MovieModel.findById(id);
        
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json(movie);
    } catch (e: any) {
        Logger.error(e.message);
        res.status(500).send("Server Error");
    }
}

export async function getAllMovies(req: Request, res: Response) {
    try {
        const movies = await MovieModel.find();
        res.status(200).json(movies);
    } catch (e: any) {
        Logger.error(e.message);
        res.status(500).send("Server Error");
    }
}

export async function removeMovie(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findByIdAndDelete(id);
        console.log(movie);
        
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }   
        
        res.status(200).json(movie);
    } catch (e: any) {  
        Logger.error(e.message);
        res.status(500).send("Server Error");
    }
}
