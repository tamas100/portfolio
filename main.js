let button = document.getElementById("button-js");
let OpenC = document.querySelector("#menu-list");
let icon = document.getElementById("button-icon");

button.addEventListener("click", Hmenu);
OpenC.addEventListener("click", Hmenu)



function proba() {
    console.log("ProgramozásKarrier");    
}


function Hmenu() {
    OpenC.classList.toggle("active");
    if(OpenC.classList === "active") {
        icon.classList.toggle("bi-x");
    } else {
        icon.classList.toggle("bi-x");
    }
    }

