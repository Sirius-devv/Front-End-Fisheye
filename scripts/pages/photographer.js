//Mettre le code JavaScript lié à la page photographer.html
// creation d'une nouvelle page avec les id
const idPhotograph = window.location.search.split("?").join("");
const photographHeader = document.querySelector(".photograph-header");
const contentImage = document.querySelector(".content-image");
const contentTri = document.querySelector(".content-tri");
const cotentLikeTotal = document.querySelector(".contentLikeTotal");
console.log(idPhotograph);
let numberLike = [];
let userMedia = [];
let contentLikeNumber = [];

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
  for (let i = 0; i < 6; i++) {
    if (userPhotograph[i].id == idPhotograph) {
      // console.log(userPhotograph[i]);
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
          src="./FishEye-Photos/Sample-Photos/Photographers_ID_Photos/${userPhotograph[i].portrait}"
          alt="Photo-${userPhotograph[i].name}"
        />`;
    }
  }
};

test();

const mediaFunction = async () => {
  await fetchCall();

  const resultFound = userPhotograph.find(
    (element) => element.id == idPhotograph
  );

  const result = userMedia.filter(
    (list) => list.photographerId == idPhotograph
  );

  contentTri.innerHTML = `
         <h3>Trier par</h3>
        <div class="select-tri">
          <select name="selectName" id="selectName">
            <option selected value="" id ="popularite">Popularité</option>
            <option value="">Date</option>
            <option value="" id="titre">Titre</option>
          </select>
        </div> 

    `;

  contentImage.innerHTML = result
    .map((user) => {
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
    <video controls="controls">
    <source src="FishEye-Photos/Sample-Photos/${user.photographerId}/${user.video}">
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
    })
    .join("");
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
};

mediaFunction();

////////////////////TRI///////////////////////////////////////

const triContent = async () => {
  await mediaFunction();

  const selectTri = document.querySelector("#selectName");
  const populariteTri = document.querySelector("#popularite");
  const titreTri = document.querySelector("#titre");

  const resultat = userMedia.filter(
    (list) => list.photographerId == idPhotograph
  );
  resultat.sort((a, b) => a.likes - b.likes);
  console.log(resultat);

  selectTri.addEventListener("change", () => {
    if (populariteTri.selected) {
      console.log("Good");
    } else if (titreTri.selected) {
      console.log("food");
    }
  });
};
triContent();

//////////////////////////like //////////////////////////////

const likeElement = async () => {
  // await mediaFunction();
  // await triContent();
  // const result = userMedia.filter(
  //     (list) => list.photographerId == idPhotograph
  //   );
};
likeElement();

const likeFunction = async () => {
  await triContent();
  const heartLike = document.querySelectorAll(".fas");
  const numberLike = document.querySelectorAll(".number-like");
  const comptTotalLike = document.querySelector(".numberPrice");
  const totalFunction = () => {
    let totalLike = 0;
    for (let i = 0; i < heartLike.length; i++) {
      totalLike = totalLike + parseInt(numberLike[i].textContent);
      comptTotalLike.innerHTML = totalLike;
    }
  };
  totalFunction();

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

      totalFunction();
    });
  }
};

likeFunction();

// let totalLike = 0;
//   for (let i = 0; i < result.length; i++) {
//   totalLike = totalLike + user[i].like

// }

const lightBox = async () => {

await mediaFunction();
await triContent();
await likeFunction();

const modalOpen = document.querySelector(".modal-Open-Images")
console.log(modalOpen);
const imagesModal = document.querySelectorAll(".image-replace");
console.log(imagesModal);

for(let i = 0; i < imagesModal.length; i++){
  
  let imageOpen = imagesModal[i];
  console.log(imageOpen);
  imageOpen.addEventListener("click", () => {

    // let lienImage = imageOpen.src;
    // console.log(lienImage);
    console.log(imageOpen);
    
    imageOpen.classList.add("imageOpen");
    // lienImage.classList.add(".imageOpen");

    // modalOpen.classList.add("display-Block");
  })
}

}
lightBox();
