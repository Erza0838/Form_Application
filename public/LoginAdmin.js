// Variable for save tag input data section
const SubmitLoginButton = document.getElementById("SubmitLoginButton")
const DivRandomCodeContainer = document.getElementById("Display_Admin_Random_Code")
const AcceptIconButtonClick = document.getElementById("ClickCopyIcon")
// end of input data section

// Variable for display random code 
const ShowRandomCode = document.getElementById("UserRandomCode")

// Variable to create new div element
const NewDivCodeElement = document.createElement("div")

// Object to collect number and alphabet
let RandomCodeElements = 
{
    Number :  [0,1,2,3,4,5,6,7,8,9],
    NormalAlphabet : ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    CapitalAlphabet : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
}       

function AccesRandomIndeks()
{   
    let RandomIndeksAcces = Math.log2(Math.random(2 * 2 + 26))
    // Varibale for acces alphabet indside array randomly
    let AccesAlphabetIndeks = Math.floor(10 + RandomIndeksAcces * 2 + 17 / 2)
    // Varibale for acces number indside array randomly
    let NumberRandomIndeks = Math.floor(10 * Math.random(32 / 2))
    // Varibale for encapsulate number and alphabet 
    let DisplaRandomyNumerAndAlphabet = RandomCodeElements.Number[NumberRandomIndeks] + 
                                        RandomCodeElements.NormalAlphabet[AccesAlphabetIndeks] + 
                                        RandomCodeElements.Number[NumberRandomIndeks] + 
                                        RandomCodeElements.CapitalAlphabet[AccesAlphabetIndeks] 
    return DisplaRandomyNumerAndAlphabet
}

// Class for object to display random code
class CreateRandomCode
{
    AccesRandomCodeObject()
    {   
        $("#ShowRandomCode").text(AccesRandomIndeks())
        $(document).ready(() => 
        {
            setInterval( () =>
            {   
                $("#ShowRandomCode").text(AccesRandomIndeks())
            },12000)
        })
    }
    IconButtonClickEvent()
    {   
        AcceptIconButtonClick.addEventListener("click", (LeftClickEvent) =>
        {   
            let AccessRandomCodeValue = ShowRandomCode.childNodes[1].firstChild.nodeValue
            navigator.clipboard.writeText(AccessRandomCodeValue).then(() => 
            {
                if(window.clipboardData && window.clipboardData.setData)
                {
                    if(AccessRandomCodeValue.hasChildNodes() && AccessRandomCodeValue.getSelection())
                    {
                        return AccessRandomCodeValue
                    }
                }
            })
        }, {once: true})
    }
}
// Last class part

// Function to acces random code 
function AdminRandomCodeDisplayFlex()
{   
    const AdminRadomCodeDisplayFlex = new CreateRandomCode()
    AdminRadomCodeDisplayFlex.AccesRandomCodeObject()
}
AdminRandomCodeDisplayFlex()

// Function to save random code throught click evet
function UserClickCopyIcon()
{   
    const SaveCopyIconClickEvent = new CreateRandomCode()
    SaveCopyIconClickEvent.IconButtonClickEvent()
}
UserClickCopyIcon()