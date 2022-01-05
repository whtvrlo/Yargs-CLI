const fs = require("fs")

const addMovie = (movieArr, movieObj) => {
    // console.log(movieObj)
    try {
        movieArr.push(movieObj);
        const stringyObj = JSON.stringify(movieArr)
        fs.writeFileSync('./storage.json', stringyObj);
    } catch (error) {

    }
}   

const listMovies = (movieArr) => {
    try {
        movieArr = JSON.parse(fs.readFileSync('./storage.json'));
        // console.log("it works")
        console.log(movieArr)
        console.log(JSON.parse(fs.readFileSync('./storage.json')))
        // const parseArr = JSON.parse(movieArr)
        // console.log(parseArr)

        
    
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {
    addMovie,
    listMovies
}