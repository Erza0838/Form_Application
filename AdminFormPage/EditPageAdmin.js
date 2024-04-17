const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const FilePath = require("path")
const router = express.Router()
const UseDatabase = require("../Databases_Connection/Database.js")
const Cookie = require("cookie-parser")
const session = require("express-session")

// Function for redirect to edit profile
function RenderAdminEditProfile()
{
    app.use(express.static(FilePath.join(__dirnamem, "../public")))
    const AdminEditProfilePage = FilePath.join(__dirname, "../Views")
    app.set("view engine", "ejs")
    app.set("views", AdminEditProfilePage)
    router.get("/EditAdminProfile", (request,response) => 
    {
        response.render("")
    })  
}

module.exports = router