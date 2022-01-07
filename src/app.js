const yargs = require("yargs");
const { addMovie, listMovies } = require("./utils/index.js");

const connection = require("./db/connection.js");

const command = yargs.argv._[0];


const app = async  (args) => {
    try {
          if (command === "add") {
            await addMovie({title: args.title, actor: args.actor})
            

            } else if (command === "list") {
            await listMovies();

            }
            
        
        } catch (error) {
        console.log(error);
        }
}


app(yargs.argv);