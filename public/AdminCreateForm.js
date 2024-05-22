const FormTitleClick = document.getElementById("TitleFormClick")
const FormDescriptionClick = document.getElementById("IdFormClick")
const BtnDisplayFlex = document.getElementById("StyleOptionContainerId")
const FormDescriptionStyleButton = document.getElementById("DescriptionStyleOptionContainer")
const ClickBodyElement = document.getElementById("BodyElementId")
const AdminHeaderInformation = document.getElementById("AdminHeaderInformationContainer")
const FomrContainer = document.getElementById("FormContainerId")
const TakeInputElement = document.getElementsByTagName("input")
const ClickCreateButton = document.getElementById("AnswerOptions")
const CreateQuestionOptionsContainer = document.getElementById("AdminQuestionOptions")
const SaveQuestionFormBUtton = document.getElementById("SaveQuestionButtonContainer")
const CreateNewQuestionOption = document.getElementById("AddQuestionOption")
const FormElement = document.getElementById("QuestionFormElement")
const WarningTitleMessage = document.getElementById("ShowWarningMessage")
const WarningDescriptionMessage = document.getElementById("ShowWarningMessageDescription")
const NewQuestionAnsweContainer = document.getElementById("AdminCreateQuestionAnswer")
const SeconNewQuestionContainer = document.getElementById("NewQuestionContainer")
const VariousAnswerType = ["Jawaban singkat","Paragraf","Kotak centang","Pilihan ganda"]
const AdminAnswerType = document.getElementById("AdminAnswerOptions")
const QuestionTextAreaAStylingOption = document.getElementsByClassName("New_Question_Placeholder")[0]
const CreateQuestionStyleType = document.getElementById("CreateQuestionStylingOption")

// Variable for save RGB color
const TextColorQuestionOptions = [19,90,141,1]
const InsertCheckBoxValueBackgroundColor = [19,90,141,1]
const CreateQuestionPlaceHolderTextArea = [150,150,150,1]
const CreateQuestionPlaceHolderTextAreaColorWhite = [255,255,255,1]

// Variable for create new element
const CreateQuestionStyleOptionsContainer = document.createElement("div")
const ParagraphElementButton = document.createElement("p")

// Function to move title styling options from top to bottom if input tag has click
function ChangeButtonMarginTop()              
{   
    FormTitleClick.addEventListener("click",() => 
    {
        BtnDisplayFlex.style.marginTop  = "-7vh"
    } ,false)
}
ChangeButtonMarginTop()

// Function to move title styling options from top to bottom if header tag has click
function ChangeDescriptionButtonMarginTop()              
{   
    FormDescriptionClick.addEventListener("click",() => 
    {
        FormDescriptionStyleButton.style.marginTop  = "28vh"
    } ,false)
}
ChangeDescriptionButtonMarginTop()

// Function to move styling options from bottom to top
function ClickAdminHeaderInformation()
{
    AdminHeaderInformation.addEventListener("click", () => 
    {
        BtnDisplayFlex.style.marginTop  = "-25vh"
        FormDescriptionStyleButton.style.marginTop  = "11vh"
    })
}

// Function to move styling options from bottom to top if body tag was click
function ChangeButtonDisplayNone()
{   
    ClickAdminHeaderInformation()
    ClickBodyElement.addEventListener("click",(event) =>
    {   
        if(event.target == ClickBodyElement)
        {
            BtnDisplayFlex.style.marginTop  = "-17vh"
            FormDescriptionStyleButton.style.marginTop  = "11vh"
        }
        else if(event.target == TakeInputElement && event.target == SaveQuestionFormBUtton)
        {
            return 
        }
    }, false)
}
ChangeButtonDisplayNone()

// Show question options container use margin top
function ShowCreateQuestionContainer()
{
    CreateQuestionOptionsContainer.style.marginTop = "37vh"     
}

// Hide question options container use margin top while form container click
function HideQuestionOptionsContainerUseMouseClick() 
{
    ClickBodyElement.addEventListener("click", () => 
    {   
        CreateQuestionOptionsContainer.style.marginTop = "-20vh"       
        ClickCreateButton.style.backgroundColor = `rgb(${TextColorQuestionOptions})`
        ClickCreateButton.style.color = "white"
        ClickCreateButton.classList.add("Create_Answer_Options_Height_Width_Transition")
    })
}   

// Hide question options container use margin top if esc key get press
function HideQuestionOptionsContainerUseEsckeypress()
{
    document.addEventListener("keydown", (event) => 
    {   
        if(event.key === "Escape" || event.key === "Esc")
        {
            CreateQuestionOptionsContainer.style.marginTop = "-20vh"
            ClickCreateButton.style.backgroundColor = `rgb(${TextColorQuestionOptions})`
            ClickCreateButton.style.color = "white"
            ClickCreateButton.classList.add("Create_Answer_Options_Height_Width_Transition")
        }
    })
}

// Options to hide create answer button using mouse click and keyboard press
function ClickAndEscKepyressForHideQuestion()
{
    HideQuestionOptionsContainerUseEsckeypress() || HideQuestionOptionsContainerUseMouseClick()
}
ClickAndEscKepyressForHideQuestion()

// Change text color in create answer button and add transition
function ChangeMarginTopCreateQuestionClick()
{   
    ClickCreateButton.addEventListener("click", () =>
    {   
        ClickCreateButton.style.backgroundColor = "white"
        ClickCreateButton.style.color = `rgb(${TextColorQuestionOptions})`
        ClickCreateButton.classList.add("Create_Answer_Options_Height_Width_Transition")
        ShowCreateQuestionContainer()
    })
}
ChangeMarginTopCreateQuestionClick()

// Update data without refresh page
function DisplayQuestion()
{

}

// Function for create question container and answer
function CreateQuestionAndAnswerElement() 
{
    CreateNewQuestionOption.addEventListener("click", () => 
    {  
        let NewElementIndex = 0
        
        let NewDivElementQuestionAnswer = document.createElement("div")

        // Create new element to create column spacing between form question
        let FormQuestionSpacingColumn = document.createElement("div")

        // Create new element to create text area for write new question
        let NewTextAreaForQuestion = document.createElement("textarea")
        NewTextAreaForQuestion.id = "NewQuestionTextArea"
        let TextAreaNewId = document.getElementById("NewQuestionTextArea")

        // Create new paragraf element for insert image
        let AddImageOptionParagraf = document.createElement("p")

        // Create select element to give answer options admin
        let AdminSelectElements = document.createElement("select")
        AdminSelectElements.id = "AdminSelectAnswerType"
        // let AdminSelectElementsId = document.getElementById("AdminSelectAnswerType")

        // Create option element for select answer type
        let AdminSelectOptions = document.createElement("option")
        AdminSelectOptions.id = "ChangeOptions"

        // Variable for create new element in create question input
        const CreateQuestionStyleOptionsContainer = document.createElement("div")
        const BoldStyleElementButton  = document.createElement("p")
        const ItalicStyleElementButton = document.createElement("p")
        const UnderlineStyleElementButton = document.createElement("p")
        const DeleteFormatTextElementButton = document.createElement("p")        
        const CheckboxTypeColumnContainerElement = document.createElement("div")
        const CheckboxTypeRowContainerElement = document.createElement("div")
        const ShortParagraphInputAnswer = document.createElement("textarea")
        const LongParagraphInputAnswer = document.createElement("textarea")
        const CheckboxInputAnswer = document.createElement("input")
        const InsertCheckboxValue = document.createElement("input")
        const AnswerTypeContainerElement = document.createElement("div")

        const AddNewCheckBoxAnswer = document.createElement("input")
        const TextAddNewCheckBoxAnswer = document.createElement("p")
        const NewCheckboxButtonRowContainer = document.createElement("div")
        const NewAnswerCheckboxType = document.createElement("div")

        // Give new html element name 
        NewTextAreaForQuestion.name = "AdminInputQuestion"
        LongParagraphInputAnswer.name = "InputTagParagraph"

        // Create element for styling question
        FormQuestionSpacingColumn.appendChild(CreateQuestionStyleOptionsContainer)
        CreateQuestionStyleOptionsContainer.classList.add("New_Question_Style_Type_Container")

        BoldStyleElementButton.innerText = "B"
        CreateQuestionStyleOptionsContainer.insertBefore(BoldStyleElementButton, CreateQuestionStyleOptionsContainer.children[0])
        BoldStyleElementButton.style.cursor = "pointer"

        ItalicStyleElementButton.innerText = "I"
        ItalicStyleElementButton.classList.add("Italic_Button")
        CreateQuestionStyleOptionsContainer.insertBefore(ItalicStyleElementButton, CreateQuestionStyleOptionsContainer.children[1])
        ItalicStyleElementButton.style.cursor = "pointer"

        UnderlineStyleElementButton.innerText = "U"
        CreateQuestionStyleOptionsContainer.insertBefore(UnderlineStyleElementButton, CreateQuestionStyleOptionsContainer.children[2])
        UnderlineStyleElementButton.style.cursor = "pointer"

        DeleteFormatTextElementButton.innerText = "T"
        DeleteFormatTextElementButton.classList.add("Italic_Button")
        CreateQuestionStyleOptionsContainer.insertBefore(DeleteFormatTextElementButton, CreateQuestionStyleOptionsContainer.children[3])
        DeleteFormatTextElementButton.style.cursor = "pointer"
        // End part styling question

        NewQuestionAnsweContainer.style.display = "flex"
        NewQuestionAnsweContainer.appendChild(NewDivElementQuestionAnswer)

        NewDivElementQuestionAnswer.classList.add("Create_Question_Container")
        NewDivElementQuestionAnswer.appendChild(FormQuestionSpacingColumn)

        FormQuestionSpacingColumn.classList.add("Top_Distance")
        FormQuestionSpacingColumn.appendChild(NewTextAreaForQuestion)
        NewTextAreaForQuestion.classList.add("New_Question_Placeholder")
        NewTextAreaForQuestion.placeholder = "Pertanyaan"
        NewTextAreaForQuestion.style.color = `rgb(${CreateQuestionPlaceHolderTextArea})`

        FormQuestionSpacingColumn.appendChild(AddImageOptionParagraf)
        AddImageOptionParagraf.innerText = "Gambar"
        AddImageOptionParagraf.style.color = "white"
        FormQuestionSpacingColumn.appendChild(AdminSelectElements)

        // Multiple choice
        AdminSelectElements.classList.add("Admin_Answer_Options_Type")
        AdminSelectElements.appendChild(AdminSelectOptions)
        AdminSelectOptions.innerText = VariousAnswerType[0]
        AdminSelectOptions.value = VariousAnswerType[0]

        // Paragraph options
        let CloneSelectAnswerTypeParagraph = AdminSelectOptions.cloneNode("true")
        AdminSelectElements.appendChild(CloneSelectAnswerTypeParagraph)
        CloneSelectAnswerTypeParagraph.innerText = VariousAnswerType[1]
        CloneSelectAnswerTypeParagraph.value = VariousAnswerType[1]

        // Checkbox options
        let CloneSelectAnswerTypeCheckbox = AdminSelectOptions.cloneNode("true")
        AdminSelectElements.appendChild(CloneSelectAnswerTypeCheckbox)
        CloneSelectAnswerTypeCheckbox.innerText = VariousAnswerType[2]
        CloneSelectAnswerTypeCheckbox.value = VariousAnswerType[2]

        // Short paragraph
        let CloneSelectAnswerTypeShortParagraph = AdminSelectOptions.cloneNode("true")
        AdminSelectElements.appendChild(CloneSelectAnswerTypeShortParagraph)
        CloneSelectAnswerTypeShortParagraph.innerText = VariousAnswerType[3]
        CloneSelectAnswerTypeShortParagraph.value = VariousAnswerType[3]

        // Add pointer effect
        AddImageOptionParagraf.addEventListener("mouseover", () => 
        {
            AddImageOptionParagraf.style.cursor = "pointer"
        })
        // End part pointer effect

        // Show styling option for new question
        NewTextAreaForQuestion.addEventListener("click", () => 
        {
            CreateQuestionStyleOptionsContainer.style.top = "7vh"
            CreateQuestionStyleOptionsContainer.classList.add("Show_Question_Styling_Options_Transition")
        })

        // Hide styling option when esc key press and click mouse
        document.addEventListener("keydown", (event) => 
        {   
            if(event.key === "Escape" || event.key === "Esc")
            {
                CreateQuestionStyleOptionsContainer.style.top = "-1vh"
                CreateQuestionStyleOptionsContainer.classList.add("Show_Question_Styling_Options_Transition")
            }
        })

        ClickBodyElement.addEventListener("click", (event) => 
        {   
            if(event.target == ClickBodyElement)  
            {
                CreateQuestionStyleOptionsContainer.style.top = "-1vh"
            }
        })

        FormElement.addEventListener("click", (event) => 
        {   
            if(event.target == FormElement)  
            {
                CreateQuestionStyleOptionsContainer.style.top = "-1vh"
            }
        })
        // End part hide question styling option

        NewTextAreaForQuestion.addEventListener("keypress", () => 
        {   
            NewTextAreaForQuestion.style.color = "black"
        },false)

        // Eventlistener for change answer type 
        AdminSelectElements.addEventListener("change", (event) => 
        {   
            // Create text area element according to answer type paragraf
            if(event.target.value == VariousAnswerType[1])
            {   
                AnswerTypeContainerElement.classList.add("Answer_Type_Container")
                FormQuestionSpacingColumn.appendChild(AnswerTypeContainerElement)
                AnswerTypeContainerElement.appendChild(LongParagraphInputAnswer)
                LongParagraphInputAnswer.classList.add("Select_Paragraph_Type_Answer")
                LongParagraphInputAnswer.disabled = "false" 
                LongParagraphInputAnswer.placeholder = "Jawaban teks panjang" 
            }
            // Create input text type element according answer type checkbox
            if(event.target.value == VariousAnswerType[2])
            {   
                CheckboxTypeColumnContainerElement.classList.add("Checkbox_Type_Answer_Column_Container")
                CheckboxTypeRowContainerElement.classList.add("Checkbox_Type_Answer_Row_Container")
                InsertCheckboxValue.classList.add("Insert_Checkbox_Value")
                TextAddNewCheckBoxAnswer.classList.add("Add_New_Checkbox_Answer")

                FormQuestionSpacingColumn.appendChild(CheckboxTypeColumnContainerElement)
                CheckboxTypeColumnContainerElement.appendChild(CheckboxTypeRowContainerElement)
                CheckboxTypeRowContainerElement.append(CheckboxInputAnswer,InsertCheckboxValue,TextAddNewCheckBoxAnswer)
                CheckboxInputAnswer.type = "checkbox"
                CheckboxInputAnswer.disabled = "false"
                TextAddNewCheckBoxAnswer.innerText = "Tambah pilihan"
                NewDivElementQuestionAnswer.style.paddingTop = "14vh"
                NewDivElementQuestionAnswer.style.paddingBottom = "19vh"
                NewQuestionAnsweContainer.style.marginTop = "-110vh"

                // Eventlistener to show border bottom
                InsertCheckboxValue.addEventListener("click", () => 
                {
                    InsertCheckboxValue.classList.add("Show_Border_Bottom")
                })

                // Eventlistener to remove border bottom 
                ClickBodyElement.addEventListener("click", (event) => 
                {   
                    if(event.target == ClickBodyElement)  
                    {
                        InsertCheckboxValue.classList.remove("Show_Border_Bottom")
                    }
                })
                
                FormElement.addEventListener("click", (event) => 
                {   
                    if(event.target == FormElement)  
                    {
                        InsertCheckboxValue.classList.remove("Show_Border_Bottom")
                    }
                })

                document.addEventListener("keydown", (event) => 
                {   
                    if(event.key === "Escape" || event.key === "Esc")
                    {
                        InsertCheckboxValue.classList.remove("Show_Border_Bottom")
                    }
                })

                // Add new answer checkbox
                TextAddNewCheckBoxAnswer.addEventListener("click", () => 
                {   
                    let CheckboxRowColumnContainer = document.createElement("div")
                    let NewCheckboxRowContainer = document.createElement("div")
                    let NewInputCheckboxAnswer = document.createElement("input")
                    let NewInputCheckboxAnswerInsertValue = document.createElement("input")
                    let DeleteCheckboxValue = document.createElement("p")

                    CheckboxTypeColumnContainerElement.appendChild(CheckboxRowColumnContainer)
                    CheckboxRowColumnContainer.classList.add("Checkbox_Element_Column_Row_Container")
                    NewCheckboxRowContainer.classList.add("Checkbox_Type_Answer_Row_Container") 
                    CheckboxRowColumnContainer.appendChild(NewCheckboxRowContainer)
                    NewCheckboxRowContainer.append(NewInputCheckboxAnswer,NewInputCheckboxAnswerInsertValue,DeleteCheckboxValue)
                    NewInputCheckboxAnswerInsertValue.classList.add("Insert_Checkbox_Value")
                    NewInputCheckboxAnswer.type = "checkbox"
                    NewInputCheckboxAnswer.disabled = "false"
                    DeleteCheckboxValue.innerText = "X"
                    DeleteCheckboxValue.style.color = "white"
                    DeleteCheckboxValue.style.cursor = "pointer"
                    
                    console.log(CheckboxTypeColumnContainerElement.childElementCount)
                    if(CheckboxTypeColumnContainerElement.childElementCount > 5 || CheckboxTypeColumnContainerElement.childElementCount == 5)
                    {   
                        NewDivElementQuestionAnswer.style.paddingTop = "25vh"
                        for(let MarginValue = 0; MarginValue < CheckboxTypeColumnContainerElement.childElementCount; MarginValue++)
                        {   
                            NewDivElementQuestionAnswer.style.paddingBottom = `${38 + MarginValue * 4}vh`     
                            NewQuestionAnsweContainer.style.marginTop = `${-MarginValue - 75}vh`
                        }
                    }
                    if(CheckboxTypeColumnContainerElement.childElementCount == 12)
                    {   
                        for(let MarginValue = 0; MarginValue < CheckboxTypeColumnContainerElement.childElementCount; MarginValue++)
                        {   
                            NewDivElementQuestionAnswer.style.paddingBottom = `${41 + MarginValue * 4}vh`
                            NewQuestionAnsweContainer.style.marginTop = `${-MarginValue - 70}vh`   
                        }
                        TextAddNewCheckBoxAnswer.disabled = "false"
                    }
                    if( CheckboxTypeColumnContainerElement.childElementCount > 12)
                    {
                        for(let MarginValue = 0; MarginValue < CheckboxTypeColumnContainerElement.childElementCount; MarginValue++)
                        {   
                            NewDivElementQuestionAnswer.style.paddingBottom = `${42 + MarginValue * 6}vh`
                            NewQuestionAnsweContainer.style.marginTop = `${-MarginValue - 70}vh`   
                            if(NewQuestionAnsweContainer.style.marginTop == "-83vh")
                            {
                                return
                            }
                        }
                    }
                    
                    // Eventlistener to show border bottom
                    NewInputCheckboxAnswerInsertValue.addEventListener("click", () => 
                    {
                        NewInputCheckboxAnswerInsertValue.classList.add("Show_Border_Bottom")
                    })

                    // Eventlistener to remove border bottom    
                    FormElement.addEventListener("click", (event) => 
                    {   
                        if(event.target == FormElement)  
                        {
                            NewInputCheckboxAnswerInsertValue.classList.remove("Show_Border_Bottom")
                        }
                    })

                    document.addEventListener("keydown", (event) => 
                    {   
                        if(event.key === "Escape" || event.key === "Esc")
                        {
                            NewInputCheckboxAnswerInsertValue.classList.remove("Show_Border_Bottom")
                        }
                    })
                })
            }
            // Crate input text type element according answer type radio button     
            if(event.target.value == VariousAnswerType[3])
            {
                console.log(VariousAnswerType[3])
            }
        })
    
        if(NewQuestionAnsweContainer.childElementCount > 1)
        {
            for(NewElementIndex; NewElementIndex < NewQuestionAnsweContainer.childElementCount; NewElementIndex++)
            {
                NewQuestionAnsweContainer.style.marginTop = `${NewElementIndex + NewElementIndex - 82}vh`   
            }
        }
        else 
        {
            SaveQuestionFormBUtton.style.display = "flex"
        }
    },false)
}
CreateQuestionAndAnswerElement()