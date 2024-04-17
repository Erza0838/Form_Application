// Express require library
const AcceptAdminData = require("./StoreAdminData.js")
const express = require("express")
const app = express()
// const router =  express.Router()
const {createPool} = require("mysql2")
const ConnectionPort = 3001
const server = require("http").createServer(app)
const bodyParser = require("body-parser")

// Function for starting connection to mysql
const mysqlConnection =  createPool(
{
    host: "localhost",
    user: "root",
    password: "zeva-BE-64bit",
    database : "quis-schema"
})
// Last function section

module.exports = mysqlConnection