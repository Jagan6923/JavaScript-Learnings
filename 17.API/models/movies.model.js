import { Schema, model } from "mongoose";

// write your schema
const schema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    }
})

// create your model

const Movie = model('Movie', schema)

export default Movie;