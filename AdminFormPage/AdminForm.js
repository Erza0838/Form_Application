const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const AdminPageFilePath = require("path")
const server = require("http").createServer(app)
// const AdminFormRouter = express.Router()
const router = express.Router()
// const DatabaseConnection = require("../Databases_Connection/Database.js")
// const server = require("http").createServer(app)
// const port = 5000

// Database connection
// DatabaseConnection.promise( () => 
// {
//     switch(error)
//     {
//         case error : throw error
//     }
// })

// app.use(bodyParser.urlencoded({ extended: true }))\
app.use(router)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

function MoveAdminLevelToFormPage()
{   
    // app.use(router)
    app.use(express.static(AdminPageFilePath.join(__dirname, "../public")))
    const AdminFormLayout = AdminPageFilePath.join(__dirname, "../Views")
    app.set("view engine", "ejs")
    app.set("views", AdminFormLayout)
    router.get("/AdminPost/AdminPage", (request, response, next) => 
    { 
      return response.render("Admin_Create_Forms")
      // return next()
    })
    // server.listen(3001)
}
MoveAdminLevelToFormPage()

// module.exports = {AdminFormRouter, MoveAdminLevelToFormPage}
module.exports = {router, MoveAdminLevelToFormPage}