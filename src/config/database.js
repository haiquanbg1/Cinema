const mysql = require('mysql2')
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const pool = {
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
}

const connection = mysql.createPool({
    host: config.port,
    database: config.database,
    user: config.username,
    password: config.password,
    port: config.port,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

module.exports = connection