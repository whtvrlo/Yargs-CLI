const fs = require("fs");
const { array } = require("yargs");

const addMovie = (movieArr, movieObj) => {
    // console.log(movieObj)
    try {
        movieArr.push(movieObj);
        const stringyObj = JSON.stringify(movieArr)
        fs.writeFileSync('./storage.json', stringyObj);
    } catch (error) {

    }
}   

const deleteMovie = (movieArr, movieObj) => {
    // console.log("which movie would you likes to delete")
    movieArr.slice(movieObj);
    console.log(movieObj)
    // user command =           node src/app.js "delete" --title="deer hunter" --actor="meryl streep"
    // newMovieArr = 
    let index = movieArr.indexOf(movieObj)
     try {
        (index !== -1) 
        movieArr.splice(index, 1);
        console.log(movieArr);
        const stringyObj = JSON.stringify(movieArr)
        fs.writeFileSync('./storage.json', stringyObj);
        
    } catch (error) {
        console.log(error)
    }
}

const listMovies = (movieArr) => {
    try {
        // movieArr = JSON.parse(fs.readFileSync('./storage.json'));
        // console.log("it works")
        // console.log(movieArr)
        console.log(JSON.parse(fs.readFileSync('./storage.json')))
        // const parseArr = JSON.parse(movieArr)
        // console.log(parseArr)

        
    
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {
    addMovie,
    deleteMovie,
    listMovies
}