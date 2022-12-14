const express = require('express');
// const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3001;
        // Conectar a base de datos
        this.conectarDB();

        // Middlawares
        // this.middlewares();

        this.routes();
    }

    async conectarDB() {
        try {
            dbConnection();
            console.log('Data base online');
        } catch (error) {
            throw new Error(error);
        }
    }

    middlewares() {
        // CORS
        // this.app.use(cors())

        // Lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(require('../routes/index'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Escuchando puerto', this.port);
        });
    }

}

module.exports = Server;
