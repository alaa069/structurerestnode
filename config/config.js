module.exports = {
    development: {
        DataBase: 'mongodb://localhost/Tododb',
        portHTTP: 3000,
        portHTTPS : 3030,
        keySSL : 'certs/server/my-server.key.pem',
        certSSL : 'certs/server/my-server.crt.pem'
    },
    test: {
        DataBase: 'mongodb://localhost/Tododb',
        portHTTP: 3000,
        portHTTPS : 3030,
        key : 'certs/server/my-server.key.pem',
        cert : 'certs/server/my-server.crt.pem'
    },
    production: {
        DataBase: 'mongodb://localhost/Tododb',
        portHTTP: 3000,
        portHTTPS : 3030,
        key : 'certs/server/my-server.key.pem',
        cert : 'certs/server/my-server.crt.pem'
    },
};