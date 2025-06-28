import express from "express";
import cors from "cors";
import environments from "./src/api/config/environments.js";
import connection from "./src/api/database/db.js";

const PORT = environments.port;
const app = express();
app.use(cors());

/**
 * 
 */
app.get("/", (request, response) => {

    response.send("Test Servidor Prendido!");

});

app.get("/productos", async (request, response) => {

    try {

        // query para mostrar la totalidad de los productos ACTIVOS
        let sql = `SELECT * FROM productos WHERE activo = 1`;

        let [rows] = await connection.query(sql);
        response.status(200).json({
            payload: rows,
            message: rows.length === 0 ? "No se encontraron productos" : "Productos encontrados"
        });

    } catch (error) {

        console.log("Error obteniendo productos ", error);

        response.status(500).json({
            error: "Error interno del servidor al obtener productos"
        });
        
    }
    
});

/**
 * Abre el servidor, y lo pone a escuchar en el puerto declarado
 */
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});