
export const MovieIndex = (req, res) => {
    res.json({ message: "Get all movies!" })
}

export const MovieCreate = (req, res) => {
    res.json({ message: "Create movie" })
}

export const MovieUpdate = (req, res) => {
    res.json({ message: "Update movie!!" })
}

export const MovieDelete = (req, res) => {
    res.json({ message: "Delete movie" })
}