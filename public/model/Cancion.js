const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://shawnfox19:ampharos1@vanguardia.onybadz.mongodb.net/Musica?retryWrites=true&w=majority"
  )
  .then(() => console.log("Conectado a la Base de Datos"))
  .catch((error) => console.error(error));

const musicaSchema = new mongoose.Schema( 
    {
      _id: {
        type: String,
        required: true
      },
      cancion: String,
      artista: String,
      album: String,
      anio: Number,
      pais: String,
    },
    {
      collection: "Musica", 
    }
  );
module.exports = mongoose.model("Musica", musicaSchema);