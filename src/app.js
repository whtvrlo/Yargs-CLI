const yargs = require("yargs");
const { addMovie, listMovies, deleteMovie } = require("./utils/index.js");

const connection = require("./db/connection.js");

const command = yargs.argv._[0];


const app = async  (args) => {
    try {
          if (command === "add") {
            await addMovie({title: args.title, actor: args.actor})
            

            } else if (command === "list") {
            await listMovies();

            } else if ( command === "delete") {
              await deleteMovie({title: args.title})
              // await deleteMovie({title: args.title})
            }
            
        
        } catch (error) {
        console.log(error);
        }
}


app(yargs.argv);