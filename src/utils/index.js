const fs = require("fs");
const Movie = require("../models/models")
const mongoose = require("mongoose");


const addMovie = async (movieObj) => {
    try {
        const newMovie = new Movie(movieObj)
        await newMovie.save();
        console.log("new movie:", newMovie);

        
    } catch (error) {
        displayInfo(error)

    }
}   

// const deleteMovie = async (collection, movieObj) => {
//     console.log(movieObj)
// }

const listMovies = async (collection) => {
    try {
        console.log(await collection.find({}).toArray()); 
    } catch (error) {
        console.log(error);
    }
}

// const updateMovie = async (collection, updateObj) => {
//     try {
//       await collection.updateOne(filter, updateObj)
//       console.log(collection.updateOne(filter,updateObj))
//         // create filter for a movie to update
//         const updateObj = {
//            $set: {
//                title: args.title
//            }
           
//         };
    

      


     
        

//     } catch (error) {
//         console.log(error)
//     }
// }



//// old delete function
// const deleteMovie = (collection) => {
//     // console.log("which movie would you likes to delete")
//     movieArr.slice(movieObj);
//     console.log(movieObj)
//     // user command =           node src/app.js "delete" --title="deer hunter" --actor="meryl streep"
//     // newMovieArr = 
//     let index = movieArr.indexOf(movieObj)
//      try {
//         (index !== -1) 
//         movieArr.splice(index, 1);
//         console.log(movieArr);
//         const stringyObj = JSON.stringify(movieArr)
//         fs.writeFileSync('./storage.json', stringyObj);
        
//     } catch (error) {
//         console.log(error)
//     }
// }


module.exports = {
    addMovie,
    listMovies,
    // deleteMovie
}