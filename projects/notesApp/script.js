const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    img.src = "img/delete-bin-7-fill.png";

    notesContainer.appendChild(inputBox).appendChild(img);

});

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName == "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(notes => {
            notes.onkeyup = () => {
                updateStorage();
            }
        });
    }
});

document.addEventListener("keydown", event =>{
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
