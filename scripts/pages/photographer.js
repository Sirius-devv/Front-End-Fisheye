//Mettre le code JavaScript lié à la page photographer.html
// creation d'une nouvelle page avec les id
///////////////////idDuPhotogrtaphRecuperation////////////////
const idPhotograph = window.location.search.split("?").join("");
//////////////////////LesConteneurGlobalDeToutLesElementEnHtml///////////////////////
const photographHeader = document.querySelector(".photograph-header");
const contentImage = document.querySelector(".content-image");
const contentTri = document.querySelector(".content-tri");
const cotentLikeTotal = document.querySelector(".contentLikeTotal");
const modalOpen = document.querySelector(".modal-Open-Images");
console.log(idPhotograph);
/////////////////////////LesVariablesGlobalQuiChangeEnFunction//////////////////////////
let numberLike = [];
let photograph;
let userMedia = [];
let contentLikeNumber = [];
let LesMediaDePhotograph = [];
/////////////functionCallFetch/////////////////////
const fetchCall = async () => {
  await fetch("data/photographers.json")
    .then((res) => res.json())
    .then((promise) => {
      userMedia = promise.media;
      userPhotograph = promise.photographers;

      photograph = userPhotograph.find((element) => element.id == idPhotograph);
      console.log(photograph);
      affichagePhotographer();

      LesMediaDePhotograph = userMedia.filter(
        (list) => list.photographerId == idPhotograph
      );

      affichageDesMedia();
      incrementLikeClickHeart();
      InputTriPopularityDate();
      lightBox();
    });
};
fetchCall();
//////////////////////FunctionAffichageDesPhotographerDansLeurPage/////////////////////////:
const affichagePhotographer = async () => {
  photographHeader.innerHTML = `
          <div class="name-photograph">
          <h2>${photograph.name}</h2>
          <h3>${photograph.city}, ${photograph.country}</h3>
          <p>${photograph.tagline}</p>
        </div>
        <button class="contact_button" onclick="displayModal()">
          Contactez-moi
        </button>
        <img
          src="./FishEye-Photos/Sample-Photos/Photographers_ID_Photos/${photograph.portrait}"
          alt="Photo-${photograph.name}"
        />`;
};
///////////////functionAffichageDesMedia/////////////////////
const affichageDesMedia = async () => {
  const resultFound = userPhotograph.find(
    (element) => element.id == idPhotograph
  );

  contentTri.innerHTML = `
         <h3>Trier par</h3>
        <div class="select-tri">
          <select name="selectName" id="selectName">
            <option  value="" class="popularite">Popularité</option>
            <option  value="">Date</option>    
            <option  value="" class="titre">Titre</option>
              
          </select>
        </div> 

    `;

  contentImage.innerHTML = LesMediaDePhotograph.map((user) => {
    if (user.image) {
      return `
  <article>
  <img
    src="FishEye-Photos/Sample-Photos/${user.photographerId}/${user.image}"
    alt="${user.title}" class="image-replace"
  />
  <div class="content-like">
    <h3>${user.title}</h3>
    <div class="number-icon">
      <span class="number-like" aria-label="numberlikes">${user.likes}</span>
      <span class="icon-like" aria-label="likes"
        ><i class="fas fa-heart"></i
      ></span>
    </div>
  </div>
</article>

  `;
    } else {
      return `
    <article>
    <video controls="controls" class="video-replace">
    <source src="FishEye-Photos/Sample-Photos/${user.photographerId}/${user.video}" class="video-replace">
    </video>
    <div class="content-like">
      <h3>${user.title}</h3>
      <div class="number-icon">
        <span class="number-like" aria-label="numberlikes">${user.likes}</span>
        <span class="icon-like" aria-label="likes"
          ><i class="fas fa-heart"></i
        ></span>
      </div>
    </div>
    </article>
    `;
    }
  }).join("");
  cotentLikeTotal.innerHTML = `
    <div class="price-number">
    <span class="numberPrice" aria-label="numberlikes"></span>
    <span class="icon-like-svg" aria-label="likes"
      > <svg
      class="
        main__Restaurant__containers__accueil__card__svg__heart-full
      "
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg></span>
    </div>
    <div class="day-price">
    <p> ${resultFound.price} / jour </p>
    </div>
    `;
  modalOpen.innerHTML = `
    <div class="closeLightBox">
    <i class="fa-solid fa-xmark"></i>
    </div>
    <div class="changeMediaLight">
    <i class="fa-solid fa-angle-right"></i>

    <i class="fa-solid fa-angle-left"></i>
    </div>
    `;
  InputTriPopularityDate();
};

////////////////////FunctionDeTri///////////////////////////////////////

const InputTriPopularityDate = async () => {
  const selectTri = document.querySelector("#selectName");
  const populariteTri = document.querySelector(".popularite");
  const titreTri = document.querySelector(".titre");
  selectTri.addEventListener("input", () => {
    if (populariteTri.selected) {
      LesMediaDePhotograph.sort((a, b) => a.likes - b.likes);
      console.log(LesMediaDePhotograph);
      affichageDesMedia();
      incrementLikeClickHeart();
    } else if (titreTri.selected) {
      LesMediaDePhotograph.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        } else {
          return 0;
        }
      });
      affichageDesMedia();
      incrementLikeClickHeart();
      document.querySelector(".titre").setAttribute("selected", "");
      console.log(titreTri);
    }
  });
  lightBox();
};

//////////////////////////likeFunction//////////////////////////////

const incrementLikeClickHeart = async () => {
  const heartLike = document.querySelectorAll(".fas");
  const numberLike = document.querySelectorAll(".number-like");
  const comptTotalLike = document.querySelector(".numberPrice");
  const totalLikeFunction = () => {
    let totalLike = 0;
    for (let i = 0; i < heartLike.length; i++) {
      totalLike = totalLike + parseInt(numberLike[i].textContent);
      comptTotalLike.innerHTML = totalLike;
    }
  };
  totalLikeFunction();

  for (let i = 0; i < heartLike.length; i++) {
    let heartLikeClick = heartLike[i];

    heartLikeClick.addEventListener("click", () => {
      if (heartLikeClick.classList.contains("fas")) {
        numberLike[i].textContent++;
        heartLikeClick.classList.replace("fas", "fa");
      } else if (heartLikeClick.classList.contains("fa")) {
        numberLike[i].textContent--;
        heartLikeClick.classList.replace("fa", "fas");
      }

      totalLikeFunction();
    });
  }
};
/////////////////////lightBox///////////////////////////
const lightBox = async () => {

  let closeLightBox = document.querySelector(".closeLightBox");
  const titreImage = document.querySelectorAll(".content-like h3");
  const childLength = document.querySelectorAll("article");

  for (let i = 0; i < childLength.length; i++) {
    let articleElement = childLength[i];
    let imageTitle = titreImage[i];

    let articleChildren = articleElement.children[0];

    articleChildren.addEventListener("click", () => {
      articleChildren.classList.add("imageOpen");
      imageTitle.classList.add("image-titre-click");
      modalOpen.classList.add("display-Block");
      console.log(articleChildren);
    });

    closeLightBox.addEventListener("click", () => {
      articleChildren.classList.remove("imageOpen");
      imageTitle.classList.remove("image-titre-click");
      modalOpen.classList.remove("display-Block");
    });
  }
};
