import { Tabla } from "../models/comentario.model.js";

Tabla.create({
    alumno: "Leonardo",
    materias: "Matematicas, Programacion, Ingles, Fisica",
    calificacion_por_materia: 8,
    asistencias: 15,
    promedio: 8,
    grado: 5
})    
Tabla.create({
    alumno: "Manuel",
    materias: "Redes, Tutoria, literatura, historia",
    calificacion_por_materia: 9,
    asistencias: 17,
    promedio: 9,
    grado: 5
})
Tabla.create({
    alumno: "Hiram",
    materias: "Matematicas, mineria de datos, procesos industriales, Ingles",
    calificacion_por_materia: 9.6,
    asistencias: 17,
    promedio: 9.6,
    grado: 5
})
Tabla.create({
    alumno: "Kevin",
    materias: "Matematicas, redes, programacion, tutoria",
    calificacion_por_materia: 9.1,
    asistencias: 18,
    promedio: 9.1,
    grado: 5
})
Tabla.create({
    alumno: "Carlos",
    materias: "tutorias, redes, fisica, ingles",
    calificacion_por_materia: 9.5,
    asistencias: 20,
    promedio: 9.5,
    grado: 5
})
Tabla.create({
    alumno: "Chema",
    materias: "Matematicas, procesos industriales, fisica, ingles",
    calificacion_por_materia: 9.2,
    asistencias: 17,
    promedio: 9.2,
    grado: 5
})
Tabla.create({
    alumno: "Rodrigo",
    materias: "Matematicas, fisica, redes, ingles",
    calificacion_por_materia: 9.1,
    asistencias: 20,
    promedio: 9.1,
    grado: 5
})
Tabla.create({
    alumno: "Ricardo",
    materias: "Matematicas, procesos industriales, programacion, redes",
    calificacion_por_materia: 9.2,
    asistencias: 20,
    promedio: 9.2,
    grado: 5
})
Tabla.create({
    alumno: "Mayte",
    materias: "Matematicas, ingles, fisica, redes",
    calificacion_por_materia: 9.3,
    asistencias: 20,
    promedio: 9.3,
    grado: 5
})
Tabla.create({
    alumno: "Alonso",
    materias: "programacion estructurada, redes, sistemas operativos, ingles",
    calificacion_por_materia: 8.2,
    asistencias: 19,
    promedio: 8.2,
    grado: 2
})

export const test = () => console.log("Llamando el controlador en app")