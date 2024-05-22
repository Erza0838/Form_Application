// Express require library
//  const {createPool} = require("mysql2")
const mysql = require("mysql")
const env = require("dotenv").config()

// Function for starting connection to MYSQL
const mysqlConnection =  mysql.createConnection(
{   
    host: "localhost",
    user: "root",
    password: "zeva-BE-64bit",
    database : "quis-schema"
})
module.exports = mysqlConnection