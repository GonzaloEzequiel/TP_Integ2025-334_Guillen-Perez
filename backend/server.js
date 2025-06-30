import express from "express";
import cors from "cors";
import environments from "./src/api/config/environments.js";
import connection from "./src/api/database/db.js";

const PORT = environments.port;
const app = express();
app.use(cors());
app.use(express.json());

/**
 * 
 */
app.get("/", (request, response) => {

    response.send("El servidor está prendido y escuchando...");

});

/**
 * Función para mostrar la totalidad de los productos ACTIVOS
 */
app.get("/productos", async (request, response) => {

    try {

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
 * Función para dar de alta administradores
 */
app.post("/admin", async (request, response) => {

    try {

    } catch(error) {

    }

});

/**
 * Función de login para usuarios administradores de la plataforma
 */
app.post("/admin/login", async (request, response) => {

    try {
        
        let { email, password } = request.body;

        //password = cifrado-password                                               !! Buscar métodos de cifrado de contraseñas nodejs !!

        let sql = `SELECT * FROM admins WHERE email = ? AND password = ?`;

        let [rows] = await connection.query(sql, [email, password]);

        if(rows.length) {

            response.status(200).json({
                message: "Login exitoso", 
                admin: rows[0].nombre
            })
        
        } else {
            response.status(404).json("Credenciales Inválidas");
        }        

    } catch(error) {

        console.log(error);
        response.status(500).json({error});

    }    

});

/**
 * Abre el servidor, y lo pone a escuchar en el puerto declarado
 */
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});