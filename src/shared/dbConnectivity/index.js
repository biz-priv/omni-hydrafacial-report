/*
* File: src\shared\dbConnectivity\index.js
* Project: Omni-hydrafacial-report
* Author: Bizcloud Experts
* Date: 2022-03-04
* Confidential and Proprietary
*/
const pg = require("pg");

const client = new pg.Pool({
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

module.exports = { client }