const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const FilePath = require("path")
const router = express.Router()
const UseDatabase = require("./Database.js")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

global.SelectAdminInformationByCode

// Function for redirect to edit profile
function RenderAdminEditProfile()
{
    app.use(express.static(FilePath.join(__dirname, "../public")))
    const AdminEditProfilePage = FilePath.join(__dirname, "../Views")
    app.set("view engine", "ejs")
    app.set("views", AdminEditProfilePage)
    router.route("/EditAdminProfile/:EditProfileId").get((request,response) => 
    {
        SelectAdminInformationByCode = `SELECT * FROM admin_quis_data WHERE Admin_Code = \'${request.params.EditProfileId}\'`
        try 
        {
            UseDatabase.query(SelectAdminInformationByCode, (error,result) => 
            {
                if(error)
                {
                    console.log(error)
                }
                else 
                {   
                    // console.log({result})
                    response.render("Admin_Edit_Page",{EditAdminInformation : result})
                    return result           
                }
            })
        } 
        catch (error) 
        {
            console.log(error)
        }
    })
}
RenderAdminEditProfile()

module.exports = router