const express = require("express")
const bodyParser = require("body-parser")
const app = express()
// const methodOverride = require("method-override")
const router = express.Router()
const UseDatabase = require("../Databases_Connection/Database.js")
const AdminEditPage = require("./EditPageAdmin.js") 

global.GetAdminProfile
global.SelectAdminInformation

// app.use("/EditAdminProfile",AdminEditPage)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(methodOverride("_method"))

function SaveAdminNewProfile()
{
    app.put("/UpdateAdminProfile/:UpdateAdminInormationId",(request,response) => 
    {   
        let NewAdminInformation = 
        {
            NewAdminName : request.body.AdminNewNameValue,
            NewAdminAge : request.body.AdminNewAgeValue,
            NewAdminGender : request.body.AdminNewGenderValue,
            NewAdminEmail : request.body.AdminNewEmailValue,
        }

        let UpdateAdminProfileById = `UPDATE admin_quis_data SET 
            Admin_Name = "${NewAdminInformation.NewAdminName}",
            Admin_Age = "${NewAdminInformation.NewAdminAge}",,
            Admin_Gender = "${NewAdminInformation.NewAdminGender}",
            Admin_Email = "${NewAdminInformation.NewAdminEmail}",
            WHERE Admin_Code = \"${request.params.id}\"` 
        UseDatabase.query(UpdateAdminProfileById, (error,result) => 
        {   
            try 
            {   
                if(SelectAdminInformationByCode !== GetUserData)
                {   
                    response.redirect(303,"/UpdateAdminProfile/EditAdminProfile")
                    return result
                }
            } 
            catch
            {
                console.log(error)
            }
        })
    })
}
SaveAdminNewProfile()
module.exports = router
