import { Tabla } from "../models/alumnos.model.js"

Tabla.create({
    nombre : "coffee",
    edad : 20,
    materia : "Todas"
})

export const test = () => console.log("funciona el controladora a app")