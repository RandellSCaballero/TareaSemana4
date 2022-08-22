const express = require("express");
const bodyParser = require("body-parser");
const app = express(); 
const cancionRoutes = require("./public/routes/Canciones");
const port = process.env.PORT|| 3000;

app.listen(port, () => {
console.log("App escuchando en el puerto!", port)
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Middleware
app.use(express.json());
app.use("/api", cancionRoutes);

//routes
app.get('/', (req,res) => {
  res.send("Bienvenido a mi API REST Randell Caballero");
})
