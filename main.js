const input = document.querySelector("#inputToDo");
const addBtn = document.querySelector("#submitButton");
const list = document.querySelector("#toDoList");
const msg = document.querySelector("#message");
const showCompleted = document.querySelector("#completedList");
const toDoArray = [];
let completedToDos = 0;

addBtn.addEventListener("click", addToDo);

//ToDo innehåller ett id, tanken var att varje ToDo
class ToDo {
    constructor(toDoTitle) {
        this.toDoTitle = toDoTitle;
        this.toDoStatus = false;
    }
  
    set status (status) {
        this.toDoStatus = status;
      }
}

function addToDo() {
    text = input.value;
    if (text.length == 0){
        msg.innerHTML = "Du måste skriva något!";
        return;
    }
    else{
        let toDo = new ToDo (text);
        toDoArray.push(toDo);
        submitToDo(toDo);
    }
    msg.innerHTML = "";
}

function submitToDo(toDo){
    keepTrack();
    let item = document.createElement("li");
    let itemLabel = document.createElement("span");
    list.appendChild(item);
    item.appendChild(itemLabel);
    itemLabel.innerText = toDo.toDoTitle;
    itemLabel.addEventListener("click",
    
    function (){
    if (!toDo.toDoStatus){
        toDo.toDoStatus = true;
        item.setAttribute("class", "completed");
        completedToDos++;
        keepTrack();
    }
    });
}

function keepTrack (){
    showCompleted.innerHTML = `${completedToDos} Completed`;
}