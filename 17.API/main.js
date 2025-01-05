import express from "express";
import moviesRoutes from "./routes/movies.routes.js";
import connectDB from "./lib/db.js";
const app = express();

const port = 6969

// Data understanding middlewar
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.json({ message: "Hello World" });
})

// client -> Middleware -> server

app.use('/movies', moviesRoutes);

app.listen(port, () => {
    console.log(`Server is running on port at http://localhost:${port}`);
})


// DRY principles => don't repeat yourself
// kiss principles => keep it simple