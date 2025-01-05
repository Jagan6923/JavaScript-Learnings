import express from "express";
import { MovieCreate, MovieDelete, MovieDetail, MovieIndex, MovieUpdate } from "../controllers/movies.controller.js";


const router = express.Router();

// MVC: Model, View, Controller
// CRUD functionality of movies

// R - Read
router.get('/', MovieIndex)
router.get('/:id', MovieDetail)


// C - Create
router.post('/', MovieCreate)

// U - Update
router.put('/:id', MovieUpdate)

// D - Delete
router.delete('/:id', MovieDelete)


export default router