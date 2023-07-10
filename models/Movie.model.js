const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
  name: {
    title: String,
  },
  genre: {
    type: String,
  },
  plot: {
    type: String,
  },
  cast: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
});

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
