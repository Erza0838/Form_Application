import { SaveEditProfileAdmin } from "./AutoRefreshEditPage.js";
// const GetBodyElement = document.getElementById("BodyElementProfilePage")
const GetBodyElement = document.body

function EditAmdinInformationButtonClick()
{
    GetBodyElement.addEventListener("click",() => 
    {
        console.log("Body sudah di klik")
    })   
    // SaveEditProfileAdmin.addEventListener("click",() => 
    // {
    //     window.location.reload()
    // })   
    // window.location.reload()
}
EditAmdinInformationButtonClick()

console.log("fsfs")