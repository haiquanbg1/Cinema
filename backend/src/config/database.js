const mysql = require('mysql2/promise')
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require('./config.js')[env];
const fs = require('fs')

// const connection = mysql.createPool({
//     host: config.host,
//     database: config.database,
//     user: config.username,
//     password: config.password,
//     port: config.port,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
// })

const connection = mysql.createPool({
    host: config.host,
    database: config.database,
    user: config.username,
    password: config.password,
    port: config.port,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

connection.query(
    'select * from user'
).catch((err) => {
    console.log(err)
})

console.log(connection)

module.exports = connection