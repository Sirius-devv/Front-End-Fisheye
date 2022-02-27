// form contact
const modalContact = document.querySelector("#contact_modal");
console.log(modalContact);

function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

// modal open
const modalValid = () => {
  modalContact.innerHTML = `
     <div class="modal">
     <header>
      <h2>Contactez-moi</h2>
      <img src="assets/icons/close.svg" onclick="closeModal()" />
    </header>
    <form
      name="reserve"
      action="photographer.html"
      method="get"
      id="formvalidation"
    >
      <div class="formData">
        <label for="first">Prénom</label><br />
        <input
          class="text-control"
          type="text"
          id="first"
          name="first"
        /><br />
        <p class="prenom-error style-error">
          Veuillez entrer 2 caractères ou plus
        </p>
      </div>
      <div class="formData">
        <label for="last">Nom</label><br />
        <input
          class="text-control"
          type="text"
          id="last"
          name="last"
        /><br />
        <p class="name-error style-error">
          Veuillez entrer 2 caractères ou plus
        </p>
      </div>
      <div class="formData">
        <label for="email">E-mail</label><br />
        <input
          class="text-control"
          type="text"
          id="email"
          name="email"
        /><br />
        <p class="message-adresse style-error">
          veuillez entrer une adresse émail valide
        </p>
      </div>
      <div class="formData">
        <label for="message">Votre message</label><br />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <p class="message-error">
          veuillez entrer un minimun de caractères
        </p>
      </div>
      <button class="contact_button">Envoyer</button>
    </form>
  </div>`;
};
// creation du modele de validation 
const formFunction = async () => {
  await modalValid();

  const formValidation = document.querySelector("#formvalidation");
  console.log(formValidation);
  // all Input
  const prenomInput = document.querySelector("#first");
  console.log(prenomInput);
  const nameInput = document.querySelector("#last");
  const emailInput = document.querySelector("#email");
  const yourMessage = document.querySelector("#message");
  // message error
  const prenomError = document.querySelector(".prenom-error");
  const nameError = document.querySelector(".name-error");
  const emailError = document.querySelector(".message-adresse");
  const messageError = document.querySelector(".message-error");
  // regex
  let regexmail =
    /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
  // form -- Validation
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
    if(prenomInput.value.length >= 2 && nameInput.value.length >= 2  && emailInput.value.match(regexmail) && yourMessage.value.length >= 4){
      console.log("good");
      location.reload();
      e.preventDefault();
    }
    e.preventDefault();  
  });
};
formFunction();
