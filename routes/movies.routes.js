// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Celeb = require("../models/Celebrity.model");

// all your routes here

// router.get("/", (req, res) => {
//   res.send("my movie route begins");
// });
router.get("/create", async (req, res) => {
  const celebrityItems = await Celeb.find();
  try {
    console.log("celebrities: ", celebrityItems);
    res.render("movies/new-movie", { celebrityItems });
  } catch (error) {
    console.log("error in creating new movie: ", error);
  }
});
router.post("/create", async (req, res) => {
  try {
    const id = req.body.casts;
    const celebrity = await Celeb.findById(id);
    console.log("cast request shows: ", celebrity);
    // const data = {
    //   name: celebrity.name,
    //   genre: "",
    //   plot: "",
    // };
    const creadedNovie = await Movie.create(id);
    res.redirect("../movies");
  } catch (error) {
    console.log("error while posting cast: ", error);
  }
});
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    console.log("MOVIES: ", movies);
    res.render("movies/movies", { movies });
  } catch (error) {
    console.error("error while listing movies: ", error);
  }
});
module.exports = router;
