const express = require('express')
const app = express()

//Conexion a la Base de Mongo
const mongoose = require('mongoose')
mongoose
    .connect('mongodb://127.0.0.1:27017/lenguajes')
    .then(() => console.log('Conectado a Base de Mongo'))

//Model
const Lenguajes= require('./Models/Lenguajes.model')

//Routing 
app.get('/api/listaLenguajes', (req, res) => {
    Lenguajes
    .find()
    .then(allLenguajes => res.json(allLenguajes))
})

app.get('/api/details/:lenguaje_id', (req, res) =>{
    const {lenguaje_id} = req.params

    Lenguajes
    .findById(lenguaje_id)
    .then(lenguaje => res.json(lenguaje))
})

app.listen(5005, () => console.log('Servidor levantado'))
