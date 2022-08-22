const express = require("express");
const musicaSchema = require("../model/Cancion");
const router = express.Router();
const mongoose = require("mongoose");

//GET Canciones
router.get('/canciones', (req, res) => {
    musicaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
 });

//GET Canciones por id
router.get('/canciones/:id', (req, res) => {
    const { id } = req.params;
    musicaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
 });

 //GET Canciones por artista
 router.get('/canciones/artista/:artista', (req, res) => {
   const artist  = req.params.artista;
   musicaSchema
   .findOne({artista:artist})
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});

 //GET Canciones por anio
 router.get('/canciones/anio/:anio', (req, res) => {
   const year  = req.params.anio;
   const currentYear = new Date().getFullYear();
   musicaSchema
   .find({anio:{$gte: year, $lte: currentYear}})
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});

 //GET Canciones por anio
 router.get('/canciones/entre/anio', (req, res) => {
   const year1  = req.query.year1;
   const year2 = req.query.year2;
   musicaSchema
   .find({anio:{$gte: year1, $lte: year2}})
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});


//POST Canciones
router.post('/canciones', (req, res) => {
   const modeloFinal = { ...req.body, _id: new mongoose.Types.ObjectId() }
   console.log(modeloFinal);
    const cancion = musicaSchema(modeloFinal);
    cancion
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
 });

 //MODIFICAR CANCION POR ID
 router.put('/canciones/:id', (req, res) => {
    const { id } = req.params;
    const { cancion, artista, album, anio, pais } = req.body;
    musicaSchema
    .updateOne({ _id: id }, { $set: {cancion, artista, album, anio, pais} })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
 });

//ELIMINAR CANCION POR ID
router.delete('/canciones/:id', (req, res) => {
    const { id } = req.params;
    musicaSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
 });

module.exports = router;