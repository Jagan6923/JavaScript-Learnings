import express from "express";


const router = express.Router();
// CRUD functionality of movies

// R - Read
router.get('/', (req, res) => {
    res.json({ message: "Get all movies!" })
})

// C - Create
router.post('/', (req, res) => {
    res.json({ message: "Create movie" })
})

// U - Update
router.put('/:id', (req, res) => {
    res.json({ message: "Update movie!!" })
})

// D - Delete
router.delete('/:id', (req, res) => {
    res.json({ message: "Delete movie" })
})


export default router