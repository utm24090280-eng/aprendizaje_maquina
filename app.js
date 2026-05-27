import mongoose from "mongoose";//libreria para conexion de bases de datos
import express from "express";//libreria para crear servidores
import cors from "cors";//libreria para darle seguridad al servidor
import dotenv from "dotenv";//libreria para modificar el documento.env
import { test } from "./backend/controllers/alumnos.controller.js";

dotenv.config();
mongoose.connect(process.env.url_bd)
    .then(() => console.log("Conexión exitosa a la base de datos"))
    .catch((error) => console.error("Error al conectar a la base de datos:", error));

const app = express();
app.use(cors());
app.listen(4000,  () => console.log("funciona el servidor"))

test();