const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


//To display the previously entered notes
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes(); // calling above function.

//Storing in local storage
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

//creating input box and image using scripting and adding attributes and respected values and image inside it.
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

//function for delete button. When we click on delete icon it will delete the respected note and saves the rest data.
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.parentElement);
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

//Behaviour of enter key.
document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})
