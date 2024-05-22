const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const UseDatabase = require("../Databases_Connection/Database.js")
const Cookie = require("cookie-parser")
const session = require("express-session")
const AdminInformatinRouter = express.Router()

global.SelectAmdinRandomCodeInformation
// let result1

// Function for select admin data from database
async function DisplayAdminInformation()
{   
    // SelectAmdinRandomCodeInformation = `SELECT * FROM admin_quis_data WHERE User_Level = ` + `${GetUserDataList[4]}`
    SelectAmdinRandomCodeInformation = `SELECT * FROM admin_quis_data`
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
                console.log("Data admin : " + result)
                return result
            }
        })
    } 
    catch(error) 
    {
        console.log(error)
    }
}
module.exports = {DisplayAdminInformation}