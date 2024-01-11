// PopupForm
const PopupForm = createAndAppend("form", "class", "task-form", document.body);
let PopupInput = createAndAppend("input", "type", "text", PopupForm);
PopupInput.setAttribute("class", "input-task");
const cancelBtn = createAndAppend("button", "class", "btn", PopupForm, "Cancel", "click");
const OklBtn = createAndAppend("button", "class", "btn", PopupForm, "OK", "click");


cancelBtn.addEventListener("click", CancelPoPup)

function CancelPoPup() {
    PopupForm.style.display = "none"
}


// minnform

const form = createAndAppend("form", "class", "myform", document.body)
let formInput = createAndAppend("input", "type", "text", form)
formInput.setAttribute("class", "input")
const submitBtn = createAndAppend("button", "class", "task", form, "Add your task", "click")
const saveBtn = createAndAppend("button", "class", "SaveData", form, "SaveData")

// table

const table = createAndAppend("table", "class", "add-todo", document.body)
table.setAttribute("id", "add-todo");

const trHeadings = createAndAppend("tr", null, null, table)
const trHeadings1 = createAndAppend("th", null, null, trHeadings, "ID")
const trHeadings2 = createAndAppend("th", null, null, trHeadings, "TASK")
const trHeadings3 = createAndAppend("th", null, null, trHeadings, "CREATED Time")


let id = 1;

function currentTime() {
    const fullTime = new Date();

    let currenthours = fullTime.getHours();
    let currentmin = fullTime.getMinutes();
    let currentsec = fullTime.getSeconds();
    let currentdate = fullTime.getDate();
    let currentmonth = fullTime.getMonth();
    let currentyear = fullTime.getFullYear();
    return `${currenthours}:${currentmin}:${currentsec}  ${currentdate}/${currentmonth}/${currentyear}`

}


function createAndAppend(tag, attType, attName, parent, innerTex, event) {
    const element = document.createElement(tag);
    if (!!(attType && attName)) {
        element.setAttribute(attType, attName);
    }
    if (!!parent) {
        parent.append(element)
    }
    if (!!innerTex) {
        element.innerText = innerTex
    }
    if (!!event) {
        element.addEventListener(event, (e) => {
            e.preventDefault();
            e.stopPropagation()
            if (e.type === "click") {
                if (e.target.classList[0] === "task") {
                    let trOfTd = createAndAppend("tr", null, null, table);
                    let tdOfTrId = createAndAppend("td", null, null, trOfTd, id++);
                    let tdOfTrTask = createAndAppend("td", null, null, trOfTd, formInput.value);
                    let tdOfTrCurrentTime = createAndAppend("td", null, null, trOfTd, currentTime());
                    let correctBtn = createAndAppend("button", "class", "edit", trOfTd, "Edit", "click");
                    let deleteBtn = createAndAppend("button", "class", "delete", trOfTd, "Delete", "click");
                    formInput.value = "";


                    correctBtn.addEventListener("click", currentPopup)

                    function currentPopup() {
                        PopupForm.style.display = "inline";
                    }
    
                    deleteBtn.addEventListener("click", deleteTable);
                    function deleteTable() {
                        trOfTd.remove();
                    }
                }

               

                if (e.target.classList[0] === "SaveData") {

                    let storeData = [];
                    let obj = {
                        ID: id++,
                        CurrentTask: formInput.value,
                        CurrentTime: currentTime
                    }
                    storeData.push(obj);

                    localStorage.setItem("DataSave", JSON.stringify(storeData));
                    let getlocalStorage = localStorage.getItem("DataSave");
                    console.log(getlocalStorage);

                }
            }

        })
    }
    return element
}









