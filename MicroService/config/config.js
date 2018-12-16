module.exports = {
    server: {
        port: process.env.PORT || 3000
    },
    db: {
        //Para ejecutar desde el contenedor
        connectString: process.env.MONGODB_URI || "mongodb://miMongodb:27017/catalogue_db"
        //Para ejecutar desde la maquina
        //connectString: process.env.MONGODB_URI || "mongodb://localhost:27017/catalogue_db"
    }

};