module.exports = {
    development: {
        DataBase: 'mongodb://localhost/Tododb',
        portHTTP: 3000,
        portHTTPS : 3030
    },
    test: {
        username: 'postgres',
        password: '',
        database: 'foursquare_bot_test',
        host: process.env.HOST || '127.0.0.1',
        dialect: 'postgresql',
    },
    production: {
        username: 'postgres',
        password: '',
        database: 'foursquare_bot_production',
        host: process.env.HOST || '127.0.0.1',
        dialect: 'postgresql',
    },
};