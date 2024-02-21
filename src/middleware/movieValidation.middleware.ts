import { body } from "express-validator";

export const movieCreateValidation = () => {
    return [
        body("title")
            .isString()
            .withMessage("Title is required")
            .notEmpty()
            .isLength({ min: 5 })
            .withMessage("Title must be at least 5 characters long"),
        body("rating")
            .isNumeric()
            .notEmpty()
            .withMessage("Rating is required")
            .custom((value) => {
                if (value < 0 || value > 10) {
                    throw new Error("Rating must be between 0 and 10");
                }
                return true;
            }),
        body("description")
            .isString()
            .withMessage("Description is required")
            .notEmpty(),
        body("director")
            .isString()
            .withMessage("Director is required")
            .notEmpty(),
        body("poster")
            .isURL()
            .withMessage("Poster is required")
            .notEmpty(),
    ];
}