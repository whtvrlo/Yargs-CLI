const yargs = require("yargs");
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./utils/index.js");

const connection = require("./db/connection.js");

const command = yargs.argv._[0];
console.log(yargs.argv.title)
//args should be yargsObj to understand better // naming
const app = async  (args) => {
    try {
          if (command === "add") {
            await addMovie({title: args.title, actor: args.actor})
            

            } else if (command === "list") {
            await listMovies();

            } else if ( command === "delete") {
              await deleteMovie({title: args.title})
              // await deleteMovie({title: args.title})
            } else if ( command === "update") {
              // updateMovie needs 2 objects, - a filter & - an update
              await updateMovie({title: args.title},{title: args.updateTitle})
            }
            
        
        } catch (error) {
        console.log(error);
        }
}


app(yargs.argv);