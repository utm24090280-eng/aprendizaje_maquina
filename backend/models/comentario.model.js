import {Schema, model} from "mongoose";

const Esqueleto_de_tabla = new Schema({
    alumno: String,
    materias: String,
    calificacion_por_materia: Number,
    asistencias: Number,
    promedio: Number,
    grado: Number,
})

 export const Tabla = new model("registros alumnos", Esqueleto_de_tabla)