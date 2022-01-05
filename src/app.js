const yargs = require("yargs");
const fs = require("fs")
const { addMovie, listMovies } = require("./utils/index.js")


const app = () => {
        let movieArr;
        try {
            movieArr = JSON.parse(fs.readFileSync('./storage.json'));
        } catch (error) {
            movieArr = []
        }

        try {

            if (process.argv[2] === 'add') {
                // console.log("it works!")
                addMovie(movieArr, { title: yargs.argv.title , actor: yargs.argv.actor })
            } else if (process.argv[2] === 'list') {
                listMovies();
            }

       
        } catch (error) {
        console.log(error);
        }
}

app();