require('dotenv').config()

module.exports = {
  development: {
    username: 'root',
    password: '@Hieuyb1223',
    database: 'web',
    host: 'localhost',// docker
    port: 3306, // docker
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    },
    migrationStorage: 'json',
    seederStorage: 'json',
    migrationStoragePath: './sequelizeMeta.json',
    seederStoragePath: './sequelizeData.json',
  },
  test: {
    username: 'root',
    password: 'Phamquan2004@',
    database: 'web',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    },
    migrationStorage: 'json',
    seederStorage: 'json',
    migrationStoragePath: './sequelizeMeta.json',
    seederStoragePath: './sequelizeData.json',
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        ca: `-----BEGIN CERTIFICATE-----
      *****************************************************************
      *****************************************************************
      *****************************************************************
      *****************************************************************
      *****************************************************************
      *****************************************************************
      *****************************************************************
      *****************************************************************
      *****************************************************************
      *****************************************************************
      *****************************************************************
      *****************************************************************
      *****************************************************************
      *****************************************************************
      *****************************************************************
      *****************************************************************
      *****************************************************************
      *****************************************************************
      *****************************************************************
      *****************************************************************
      *****************************************************************
      ****************************************************
      -----END CERTIFICATE-----`,
      }
    }
  }
};