import Movie from "../models/movies.model.js";

export const MovieIndex = (req, res) => {
    res.json({ message: "Get all movies!" })
}

export const MovieCreate = async (req, res) => {
    // id title description 

    console.log(req.body);

    // validate your data
    const newMovie = new Movie({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const movie = await newMovie.save();
        return res.status(201).json(movie);
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
    return res.json(req.body);
}

export const MovieUpdate = (req, res) => {
    res.json({ message: "Update movie!!" })
}

export const MovieDelete = (req, res) => {
    res.json({ message: "Delete movie" })
}