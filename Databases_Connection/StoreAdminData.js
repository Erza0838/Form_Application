const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const router = express.Router()
const jsdom = require("jsdom")
const { JSDOM } = jsdom

const FilePath = require("path")    
const ConnectionPort = 8000
const server = require("http").createServer(app)
const cors = require("cors")
const axios = require("axios")

const AdminEditProfile = require("./EditAdminProfile.js")
const AdminFormRouter = require("./AdminForm.js")
const AdminProfileRouter = require("../AdminFormPage/AdminProfileInformation.js")
const AdminEditProfileRouter = require("./EditPageAdmin.js")
const UsersLoginPage = require("./LoginUser.js")
const UseDatabase = require("../Databases_Connection/Database.js")

const Cookie = require("cookie-parser")
const session = require("express-session")
const MysqlSession = require("express-mysql-session")(session)
const jwt = require("jsonwebtoken")
const env = require("dotenv")
const e = require("express")
const { IncomingMessage } = require("http")
const CookieAge = 1000 * 60 * 60 * 2
const SaveSession = new session.MemoryStore()

global.GetUserDataList
global.GetUserData
global.UpdateAdminProfile

env.config()
app.use("/SaveAdminPageForm",AdminFormRouter)
app.use("/AdminProfile",AdminProfileRouter)
app.use("/EditAdminProfile",AdminEditProfileRouter)
app.use("/UpdateAdminProfile",AdminEditProfile)
app.use("/UserQuestionPage",AdminFormRouter)
app.use("/Login", UsersLoginPage)
app.use(Cookie())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({
    name: "Admin-Session",
    secret: process.env.ACCESS_TOKEN_SECRET,
    resave: false,
    saveUninitialized: false,
    store: SaveSession,
    cookie: 
    {
        maxAge: CookieAge,
        sameSite: true,
        secure: true,
        httpOnly: true
    }
}))

app.use((request,response,next) => 
{
    response.header("Access-Control-Allow-Origin", "*")
    response.header("Access-Control-Allow-Headers", "origin, X-Requested-With, Content-Type, Accept")
    next()
})

function StartMysqlConnection()
{   
    UseDatabase.connect((error) => 
    {
        if(error)
        {
            console.log(error.message)
        }
        else 
        {
            console.log("Connected to the MYSQL server")
        }
    })
}
StartMysqlConnection()

// Function for setting PORT connection and create server
function LoadLoginPage()
{   
    app.use(express.static(FilePath.join(__dirname,"../public")))
    const LoginPageUi = FilePath.join(__dirname, "../Views")
    app.set("view engine", "ejs")
    app.set("views", LoginPageUi)
    app.get("/Login", (request, response, next) =>  
    {   
        response.render("Login_Ui", 
        {
            scripts : 
            [
                "../public/LoginAdmin.js"
            ]
        })
    })
    server.listen(ConnectionPort, () => 

    {
        console.log("listening to port " + ConnectionPort)
    })  
}
LoadLoginPage()
// Last Function part 

// Function for redirect to admin form using POST method
function MoveToAdminPage()
{   
    app.post("/SaveAdminPageForm", (request,response) => 
    {   
        GetUserDataList = 
        [
            request.body.UserInputAge,
            request.body.UserInputName, 
            request.body.UserInputGenders,
            request.body.UserInputEmail,
            request.body.UserInputLevels,
            request.body.UserInputRandomCode
        ]
        GetUserData = 
        {
            Age : GetUserDataList[0],
            Name : GetUserDataList[1],
            Gender : GetUserDataList[2],
            Email : GetUserDataList[3],
            Level : GetUserDataList[4],
            Code : GetUserDataList[5],
        }
         global.accessToken = jwt.sign(GetUserData, process.env.ACCESS_TOKEN_SECRET)

        if(GetUserDataList[4] === "Admin")  
        {   
            if(GetUserDataList[0] > 0 && GetUserDataList[1] !== "")
            {   
                if(GetUserDataList[2] === "Laki - laki" || GetUserDataList[2] === "Perempuan")
                {   
                    let InsertInputDataAdmin = `INSERT INTO admin_quis_data(Admin_Age,Admin_Name,Admin_Gender,Admin_Email,User_Level,Admin_Code) VALUES
                                            ("${GetUserDataList[0]}","${GetUserDataList[1]}","${GetUserDataList[2]}",
                                            "${GetUserDataList[3]}","${GetUserDataList[4]}","${GetUserDataList[5]}")`
                    try
                    {
                        UseDatabase.query(InsertInputDataAdmin,(ErrorMessage) =>
                        {   
                            if(ErrorMessage) 
                            {   
                                console.log(ErrorMessage)
                            }
                            else 
                            {   
                                if(request.session != "")
                                {   
                                    // response.redirect("/SaveAdminPageForm/SaveAdminPageForm/" + `${GetUserData.Code}`)                           
                                    response.redirect("/SaveAdminPageForm/SaveAdminPageForm/")                           
                                }
                            }
                        })
                    } 
                    catch (error) 
                    {   
                        console.log(error)
                    }
                }
            } 
        }
        else if(GetUserDataList[4] === "User")
        {   
            if(GetUserDataList[0] > 0 && GetUserDataList[1] !== "")
            {
                if(GetUserDataList[2] === "Laki - laki" || GetUserDataList[2] === "Perempuan")
                {
                    let InsertInputDataUsers = `INSERT INTO users_quis_data(Users_Age,Users_Name,Users_Gender,Level_User,Users_Code,Users_Email) VALUES
                                                 ("${GetUserDataList[0]}","${GetUserDataList[1]}","${GetUserDataList[2]}",
                                                 "${GetUserDataList[4]}","${GetUserDataList[5]}","${GetUserDataList[3]}")`
                    try 
                    {
                        UseDatabase.query(InsertInputDataUsers,(error) => 
                        {   
                            if(error)
                            {
                                console.log(error)
                            }
                            else 
                            {
                                response.redirect("/SaveAdminPageForm/UserQuestionPage/" + `${GetUserData.Code}`)                                  
                            }
                        })
                    } 
                    catch(error)
                    {
                        console.log(error)
                    }
                }
            }
        }
    })
}
MoveToAdminPage()

// Function for redirect to profile page
function RenderAdminProfilePage()
{   
    // app.get("/AdminProfile/:data", (request, response) =>
    app.get("/AdminProfile/", (request, response) =>
    {   
        // const {data} = request.params
        // console.log(data)
        response.redirect("/AdminProfile/AdminProfile/" + `${GetUserDataList[5]}`)
        // response.redirect("/AdminProfile/AdminProfile/")
    })
}
RenderAdminProfilePage()

// Function for redirect to edit page
function RenderEditProfilePage()
{
    app.get("/EditAdminProfile", (request,response) => 
    {   
        response.redirect("/EditAdminProfile/EditAdminProfile/" + `${GetUserDataList[5]}`)
    })
    app.post("/UpdateAdminProfile", (request,response) => 
    {   
        let NewAdminInformation = 
        {                               
            NewAdminName : request.body.AdminNewName,
            NewAdminAge : request.body.AdminNewAge,
            NewAdminGender : request.body.AdminNewGender,
            NewAdminEmail : request.body.AdminNewEmail,
        }
        UpdateAdminProfile = `UPDATE admin_quis_data SET 
                              Admin_Name = "${NewAdminInformation.NewAdminName}",
                              Admin_Age = "${NewAdminInformation.NewAdminAge}",
                              Admin_Gender = "${NewAdminInformation.NewAdminGender}",
                              Admin_Email = "${NewAdminInformation.NewAdminEmail}" WHERE Admin_Code = \'${GetUserDataList[5]}\'`
        try 
        {
            UseDatabase.query(UpdateAdminProfile,(error,result) => 
            {   
                response.redirect("/EditAdminProfile/EditAdminProfile/" + `${GetUserDataList[5]}`)
                return result
            })    
        } 
        catch (error) 
        {
            console.log(error)
        }
    })
}
RenderEditProfilePage()

function SendAdminTitleAndDescription()
{
    app.post("/SaveFormITitleAndDescription", (request,response) => 
    // app.post("/SaveAdminPageForm", (request,response) => 
    {   
        const dom = new JSDOM(`<body>
        <div id="content"></div>
        </body>`, { runScripts: "dangerously" })
        console.log(dom.window.document.getElementById("content").id)

        let FormTitleAndDescription = 
        [
            request.body.TitleInputValue,
            request.body.DescriptionInputValue,
            // request.body.InputTagParagraph           
            // FetchFrontendValue.window.           
        ]

        if(FormTitleAndDescription[0] != "" && FormTitleAndDescription[1] != "")
        {   
            if(request.body.DescriptionInputValue.length < 256)
            {   
                let SaveFormTitleAndDescription = `INSERT INTO quis_form_information (Quis_Title,Quis_Description,Quis_Questions) VALUES 
                ("${FormTitleAndDescription[0]}","${FormTitleAndDescription[1]}","${FormTitleAndDescription[2]}")`
                try 
                {
                    UseDatabase.query(SaveFormTitleAndDescription, (error) => 
                    {   
                        if(error) 
                        {
                            console.log(error)
                        }
                    })    
                } catch (error) 
                {
                    console.log(error)
                }
            }
        }
        else 
        {   
            response.end()
        }
    })
}
SendAdminTitleAndDescription()