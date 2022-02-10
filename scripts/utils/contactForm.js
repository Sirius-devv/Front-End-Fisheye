// form contact
const formValidation = document.querySelector("#formvalidation");
// all Input
const prenomInput = document.querySelector("#first");
const nameInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");
const yourMessage = document.querySelector("#message");
// message error
const prenomError = document.querySelector(".prenom-error");
const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".message-adresse");
const messageError = document.querySelector(".message-error");
// regex
let regexmail = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

formValidation.addEventListener("submit", (e) => {
// first name
  if (prenomInput.value.length <= 1) {
    prenomError.classList.add("display-block");
    prenomInput.classList.add("border-invalid");
    e.preventDefault();
  } else {
    prenomError.classList.remove("display-block");
    prenomInput.classList.remove("border-invalid");
    prenomInput.classList.add("border-valid");
  }
// name
  if (nameInput.value.length <= 1) {
    nameError.classList.add("display-block");
    nameInput.classList.add("border-invalid");
    e.preventDefault();
  } else {
    nameError.classList.remove("display-block");
    nameInput.classList.remove("border-invalid");
    nameInput.classList.add("border-valid");
  }
// email
  if (emailInput.value.match(regexmail)) {
    emailError.classList.remove("display-block");
    emailInput.classList.add("border-valid");
    emailInput.classList.remove("border-invalid");
  } else {
    emailError.classList.add("display-block");
    emailInput.classList.add("border-invalid");
    e.preventDefault();
  }

// your message
  if (yourMessage.value.length <= 4) {
    messageError.classList.add("display-block");
    yourMessage.classList.add("border-invalid");
    e.preventDefault();
  } else {
    messageError.classList.remove("display-block");
    yourMessage.classList.remove("border-invalid");
    yourMessage.classList.add("border-valid");
  }

});
