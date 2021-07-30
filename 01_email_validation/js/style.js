//getting all attribute
const form = document.querySelector("form");
const eInput = form.querySelector(".input");
const text = form.querySelector(".text");

form.addEventListener("submit", (e)=>{
    e.preventDefault; //preventing form form submitting
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //Regex pattern to validate email
    form.classList.add("error");
    form.classList.remove("valid");
    if(eInput.value === ""){
        text.innerText = "Email can't be blank";
    } else if (!eInput.value.match(pattern)) { //if pattern is not matched with user's enter value
        text.innerText = "Please enter a valid email";
    } else {
        form.classList.replace("error", "valid"); //replacing error class with valid class
        text.innerText = "This is a valid email";
    }
});