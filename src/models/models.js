const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        actor: {
            type: String,
            required: true
        }

    }
);

const Movie = new mongoose.model("Movie", movieSchema);

module.exports = Movie;