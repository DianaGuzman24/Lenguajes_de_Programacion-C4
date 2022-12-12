const mongoose = require('mongoose')

const listaLenguajesSchema = mongoose.Schema(
    {
        nombre: String,
        anioCreacion: String,
        versionActual: String,
        diseniadoPor: String,
        logo: String,
        paradigmaUsado: String,
        esTipado: String,
        esLenguajeFrontend: String,
        esLenguajeBackend: String,
        caracteristicas: String,
        pros: String,
        contras: String,
        paginaOficial: String,
        extensiones: String,
        saberMas:String   
})

const Lenguajes = mongoose.model('listaLenguajes', listaLenguajesSchema)
module.exports = Lenguajes
