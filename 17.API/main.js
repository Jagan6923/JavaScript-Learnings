import express from "express";

const app = express();

const port = 6969

app.get('/', (req, res) => {
    res.json({ message: "Hello World" });
})

// CRUD functionality of movies

// R - Read
app.get('/movies', (req, res) => {

})

// C - Create
app.post('/movies', (req, res) => {

})

// U - Update
app.put('/movies/:id', (req, res) => {

})

// D - Delete
app.delete('/movies/:id', (req, res) => {

})


app.listen(port, () => {
    console.log(`Server is running on port at http://localhost:${port}`);
})


// DRY principles => don't repeat yourself
// kiss principles => keep it simple