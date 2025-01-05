
export const MovieIndex = (req, res) => {
    res.json({ message: "Get all movies!" })
}

export const MovieCreate = (req, res) => {
    // id title description 
    console.log(req.body);
    return res.json(req.body);

}

export const MovieUpdate = (req, res) => {
    res.json({ message: "Update movie!!" })
}

export const MovieDelete = (req, res) => {
    res.json({ message: "Delete movie" })
}