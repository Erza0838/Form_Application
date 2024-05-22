const LogoutButtonClick = document.getElementById("LogoutButtonAdmin")
console.log(LogoutButtonAdmin)
console.log("Halaman profile")
const AdminName = document.getElementById("InputValueName")

class AdminProfile
{
    SendButtonClikcRespond()
    {
        LogoutButtonClick.addEventListener("click", () =>
        {   
            window.location.href = "http://127.0.0.1:8000/Login"
        })
    }
}

function ShowAdminProfile()
{
    const AdminInformation = new AdminProfile()
    AdminInformation.SendButtonClikcRespond()
}
ShowAdminProfile()
// console.log("Sdgsdgs")