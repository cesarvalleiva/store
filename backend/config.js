const config = {
    appConfig: {
        port: process.env.APP_PORT
    },
    dbConfig: {
        db: process.env.DB_PORT,
        host: process.env.DB_HOST,
        name: process.env.DB_NAME
    }
}

module.exports = config;