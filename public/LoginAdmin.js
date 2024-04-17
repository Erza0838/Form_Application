// Variable for save tag input data section
const UserNameInputElement = document.getElementsByName("UserInputName").value
const UserInputAgeElement = document.getElementsByName("UserInputAge").value
const UserSelectGendersElement = document.getElementsByName("UserInputGenders").value
const UserInputEmailElement = document.getElementsByName("UserInputEmails").value
const UserSelectLevelsElement = document.getElementsByName("UserInputLevels").value
const SubmitLoginButton = document.getElementById("SubmitLoginButton")
// end of input data section

console.log(UserNameInputElement)

// Class for object template input tag
class InputValidation
{
    constructor(ButtonSubmit)
    {   
        this.SubmitEvent = ButtonSubmit
    }
    EnabledLoginButton()
    {   
        this.SubmitEvent.addEventListener("submit", async () =>
        {   
            // const ResponseResult = await fetch("http://localhost:5000/Databases_Connection/StoreAdminData.js", 
            const ResponseResult = await fetch("http://127.0.0.1:5501/Layout/Login_Layout.html", 
            {
                method: "get",
                // mode:"cors",
                headers: 
                {   
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(
                {
                    InputName : UserNameInputElement,
                    InputAge : UserInputAgeElement,
                    SelectGenders : UserSelectGendersElement,
                    InputEmail : UserInputEmailElement,
                    SelectLevels : UserSelectLevelsElement
                })
            }).then( (ResponseResultInput) => console.log(ResponseResultInput.json()))
        }, {once: true})     
    }
    // End of method
}
// Last class part

// Function to run method enabled login button
// async 
function InputValidationCorrect()
{
    let EnterInputDataArguments = new InputValidation(SubmitLoginButton)
    EnterInputDataArguments.EnabledLoginButton() 
}
InputValidationCorrect()