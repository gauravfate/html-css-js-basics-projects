/*
    approch for to write code of js
    
    1)create function addTask() function so we can perform task
    2)in addtask function first case is that tell user to write something
    3)get the data user added in the input
    4) create a li element dymanically and add a class to list 
    5) addd the data to the li that we created
    6) then append the list we created above 
    7) then added cross dynamically
*/
const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector(".list-task");

function addTask() {
    if (inputBox.value == "") {
        alert("You Must Write Something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData()
}

listContainer.addEventListener("click", (e) => {

    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();