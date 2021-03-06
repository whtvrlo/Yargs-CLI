const yargs = require("yargs");
const fs = require("fs")
const { addMovie, deleteMovie, listMovies } = require("./utils/index.js")


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
            } else if (process.argv[2] === 'delete'){
                deleteMovie(movieArr, { title: yargs.argv.title , actor: yargs.argv.actor })
                
        

            }

       
        } catch (error) {
        console.log(error);
        }

   
}


app();