// Hamburger menu

// variables
let button = document.getElementById("button-js");
let OpenC = document.querySelector("#menu-list");
let icon = document.getElementById("button-icon");

// Eventlistener
button.addEventListener("click", Hmenu);
OpenC.addEventListener("click", Hmenu)

// 
function Hmenu() {
    // add or remove the class "active" to the menu-list
    OpenC.classList.toggle("active");  
    // if menu-list has the class "active" then change button-icon to bi-x
    if(OpenC.classList === "active") {
        icon.classList.toggle("bi-x");
    // else return the orignal button-icon   
    } else {
        icon.classList.toggle("bi-x");
    }
    }

