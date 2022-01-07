const fs = require("fs");
const Movie = require("../models/models")
const mongoose = require("mongoose");


const addMovie = async ( movieObj ) => {
    try {
        const newMovie = new Movie(movieObj)
        await newMovie.save();
        console.log("new movie:", newMovie);

        
    } catch (error) {
        displayInfo(error)

    }
}  

const deleteMovie = async ( title ) => {
    try {
        await Movie.deleteOne(title)
        console.log(Movie.deleteOne)

    } catch (error) {
        displayInfo(error)
    }

    
}

const listMovies = async () => {
    try {
        console.log(await Movie.find({}));
        
    
    } catch (error) {
        console.log(movie)
    }
}


module.exports = {
    addMovie,
    listMovies,
    deleteMovie
}