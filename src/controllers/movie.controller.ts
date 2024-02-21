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
