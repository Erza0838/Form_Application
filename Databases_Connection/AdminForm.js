const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const AdminPageFilePath = require("path")   
const router = express.Router()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Function for render admin form and insert admin data to database
function MoveAdminLevelToFormPage()
{   
    app.use(express.static(AdminPageFilePath.join(__dirname, "../public")))
    const AdminFormLayout = AdminPageFilePath.join(__dirname, "../Views")
    app.set("view engine","ejs")
    app.set("views",AdminFormLayout)
    // router.get("/SaveAdminPageForm/:AdminId",(request, response) => 
    router.get("/SaveAdminPageForm/",(request, response) => 
    {   
        response.render("Admin_Create_Forms", {
            scripts : 
            [
                "../public/AdminCreateForm.js"
            ]
        })
    })
    router.get("/UserQuestionPage/:UserQuestionPageId/",(request,response) => 
    {
        response.render("User_Question_Page",
        {
            scripts : 
            [
                "../public/AdminCreateForm.js"
            ]
        })
    })
}
MoveAdminLevelToFormPage()

module.exports = router