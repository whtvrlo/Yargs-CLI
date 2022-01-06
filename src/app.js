const yargs = require("yargs");
const fs = require("fs")
const { addMovie, deleteMovie, listMovies } = require("./utils/index.js");
const connection = require("./db/connection.js");

const command = process.argv[2];


const app = async  (args) => {
    console.log("app.js hit")

      try {
          if (command === "add") {
            const movieObj = {title: args.title, actor: args.actor};
            // console.log("it works!")
            await connection( addMovie, movieObj )
            console.log("after connection")
            // addMovie(movieArr, { title: yargs.argv.title , actor: yargs.argv.actor })
            }
            // } else if (process.argv[2] === 'list') {
            //     listMovies();
            // } else if (process.argv[2] === 'delete'){
            //     deleteMovie(movieArr, { title: yargs.argv.title , actor: yargs.argv.actor })
                

            // }
            
        } catch (error) {
        console.log(error);
        }
}


app(yargs.argv);