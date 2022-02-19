//Mettre le code JavaScript lié à la page photographer.html

const idPhotograph = window.location.search.split("?").join("");
const photographHeader = document.querySelector(".photograph-header")
const contentImage = document.querySelector(".content-image");

console.log(idPhotograph);


let thePhoto = [];
let userMedia = [];

const fetchCall = async () => {
  await fetch("data/photographers.json")
    .then((res) => res.json())
    .then((promise) => {
      userMedia = promise.media;
      userPhotograph = promise.photographers;
    });
   
  
};
fetchCall();

const test = async () => {
  await fetchCall();
  console.log(userMedia);
  console.log(userPhotograph);
  for (let i = 0; i < 6 ; i++) {
      if(userPhotograph[i].id == idPhotograph){
          console.log(userPhotograph[i]);
          photographHeader.innerHTML = `
          <div class="name-photograph">
          <h2>${userPhotograph[i].name}</h2>
          <h3>${userPhotograph[i].city}, ${userPhotograph[i].country}</h3>
          <p>${userPhotograph[i].tagline}</p>
        </div>
        <button class="contact_button" onclick="displayModal()">
          Contactez-moi
        </button>
        <img
          src="./FishEye-Photos/Sample-Photos/All-Photo/${userPhotograph[i].portrait}"
          alt="Photo-${userPhotograph[i].name}"
        />`
      }
   
    
  }
    
    
};

test();

const mediaFunction = async () => {
  await fetchCall();
  for(let i = 0; i < 59; i++){
    if(userMedia[i].photographerId == idPhotograph){
      console.log(userMedia[i]);
      contentImage.innerHTML = `
      <article>
          <img
            src="FishEye-Photos/Sample-Photos/Mimi/Animals_Rainbow.jpg"
            alt="Arc-en-ciel"
          />
          <div class="content-like">
            <h3>Arc-en-ciel</h3>
            <div class="number-icon">
              <span class="number-like" aria-label="numberlikes">12</span>
              <span class="icon-like" aria-label="likes"
                ><i class="fas fa-heart"></i
              ></span>
            </div>
          </div>
        </article>`
    }
  }
  
}
mediaFunction();
