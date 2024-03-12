const router = require("express").Router();
const Movie = require("../models/model.movie.js");
const Genre = require("../models/model.genre.js");
// post a movie
router.post("/add", async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (err) {
    res.status(500).json("Internal server error" + err);
  }
});

// you can create a new route file for genre But i am not doing this rightnow
// add a genre
router.post("/genre/add", async (req, res) => {
  try {
    const newGenre = new Genre(req.body);
    const savedGenre = await newGenre.save();
    res.status(201).json(savedGenre);
  } catch (err) {
    res.status(500).json("Internal server error" + err);
  }
});
// get a single movie
router.get("/:id", async (req, res) => {
  try {
    const getMovie = await Movie.findById(req.params.id);
    res.status(200).json(getMovie);
  } catch (err) {
    res.status(500).json("Internal server error" + err);
  }
});
// get a all movie
router.get("/all", async (req, res) => {
  try {
    const getMovie = await Movie.find();
    res.status(200).json(getMovie);
  } catch (err) {
    res.status(500).json("Internal server error" + err);
  }
});

// get a movie by its genre
router.get("/genre/all", async (req, res) => {
  try {
    const getGenre = await Genre.findOne({ genre: req.body.genre });
    const { _id, genre } = getGenre._doc;
    const getMovies = await Movie.find({ genre: _id });
    res.status(200).json(getMovies);
  } catch (err) {
    res.status(500).json("Internal server error" + err);
  }
});
module.exports = router;
