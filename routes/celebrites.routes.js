// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celeb = require("../models/Celebrity.model");

// router.get("/", (req, res) => {
//   res.render("celebrities/celebrities");
//   console.log("req: ", req);
// });

router.get("/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});
router.post("/create", async (req, res) => {
  try {
    const newCelebRequest = req.body;
    console.log("requesting newceleb :", newCelebRequest);
    const celebrity = await Celeb.create(newCelebRequest);
    res.redirect("/celebrities");
  } catch (error) {
    console.log("error, could not create celebrity: ", error);
  }
});
router.get("/", async (req, res) => {
  try {
    const celebrityItems = await Celeb.find();
    // console.log("req: ", req);
    console.log("celebrities: ", celebrityItems[0]._id);
    res.render("celebrities/celebrities", { celebrityItems });
  } catch (error) {
    console.log("error while trying to retrieve all celebrities", error);
  }
});
// all your routes here

module.exports = router;
