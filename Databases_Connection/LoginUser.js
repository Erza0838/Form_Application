const express = require("express")
const bodyParser = require("body-parser")
const app = express()
// const LoginPageFilePath = require("path")   
const path = require("path")   
const router = express.Router()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

function LoginPage()
{
    app.use(express.static(path.join(__dirname, "../public")))
    const LoginLayout = path.join(__dirname, "../Views")    
    app.set("view engine","ejs")
    app.set("views",LoginLayout)
    router.get("/Login",(request, response) =>  
    {
        response.render("Login_Ui", 
        {
            scripts : 
            [
                "../public/LoginAdmin.js"
            ]
        })
    })
}
LoginPage()

module.exports = router