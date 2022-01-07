const yargs = require("yargs");
const { addMovie, listMovies } = require("./utils/index.js");

const connection = require("./db/connection.js");

const command = yargs.argv._[0];


const app = async  (args) => {
    try {
          if (command === "add") {
            await addMovie({title: args.title, actor: args.actor})
            

            } else if (command === "list") {
            await connection ( listMovies )
            // } else if (command === "delete") {
            //   const movieObj = {title: args.title, actor: args.actor}
            //   await connection ( movieObj )
            //   console.log (movieObj)}


            // } else if (command === "update") {
            // const updateObj = { title: args.title, updateValue: args.updateValue }
                                
                                
                                                    
// "delete" --title="thor" --actor="chris"
            }
            
        
        } catch (error) {
        console.log(error);
        }
}


app(yargs.argv);