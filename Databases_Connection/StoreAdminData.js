const http = require("http")
const RequireMysql = require("mysql")

const hostname = "127.0.0.1"
const port = 3000

const serverConnection =  http.createServer(function (request, response) 
{   
    response.statusCode = 203
    response.setHeader(`Content-Type`,`text/plain`)
    response.end("Hall,saya belajar node js")
})

serverConnection.listen(port, hostname, () =>
{
    console.log(`Server berjalan pada http://${hostname}:${port}/`)
})