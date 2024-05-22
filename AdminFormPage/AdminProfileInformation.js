const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const FilePath = require("path")    
const UseDatabase = require("../Databases_Connection/Database.js")
const router = express.Router()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// global.OldAdminInformation

// Function for redirect to admin profile page
function RenderAdminProfilePage()
{   
    app.use(express.static(FilePath.join(__dirname, "../public")))
    const AdminProfilePageLayout = FilePath.join(__dirname, "../Views")
    app.set("view engine", "ejs")
    app.set("views", AdminProfilePageLayout)
    router.get("/AdminProfile/:AdminProfileId", (request, response) =>
    // router.get("/AdminProfile", (request, response) =>
    {  
        // let SelectAmdinRandomCodeInformation = `SELECT * FROM admin_quis_data WHERE Admin_Code = \'${GetUserDataList[5]}\'`
        let SelectAmdinRandomCodeInformation = `SELECT * FROM admin_quis_data WHERE Admin_Code = \'${request.params.AdminProfileId}\'`
        try 
        {
            UseDatabase.query(SelectAmdinRandomCodeInformation, (error, result) => 
            {
                if(error)   
                {
                    console.log(error)
                }
                else 
                {   
                    response.render("Admin_Profile_Page",{AdminInformation : result})
                    return result 
                }
            })
        } 
        catch(error) 
        {
            console.log(error)
        }
    })
}
RenderAdminProfilePage()

module.exports = router
