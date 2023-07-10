// mongoose.set("strictQuery", false);
// mongoose.set("strictQuery", true);
const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
