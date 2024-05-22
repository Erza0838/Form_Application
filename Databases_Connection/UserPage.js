const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const UserPageFilePath = require("path")
const UseDatabase = require("./Database")
const router = express.Router()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

function MoveToUserPage()
{
    app.use(express.static(UserPageFilePath.join(__dirname, "../public")))
    const UserPageUi = UserPageFilePath.join(__dirname, "../Views")
    app.set("view engine","ejs")
    app.set("views",UserPageUi)
    router.get("/UserQuestionPage/:UserQuestionPageId/",(request,response) => 
    {
        response.render("User_Question_Page")
    })
}
MoveToUserPage()

module.exports = router