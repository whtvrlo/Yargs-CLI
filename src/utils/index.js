const fs = require("fs");
const Movie = require("../models/models")
const mongoose = require("mongoose");
const { createECDH } = require("crypto");


const addMovie = async ( movieObj ) => {
    try {
        const newMovie = new Movie(movieObj)
        await newMovie.save();
        console.log("new movie:", newMovie);

        
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

const updateMovie = async (title, updatedTitle) => {
    try {
        await Movie.updateOne(title, updatedTitle)

    } catch (error) {
        console.log(error)
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


module.exports = {
    addMovie,
    listMovies,
    updateMovie,
    deleteMovie
}