//Mettre le code JavaScript lié à la page photographer.html
// creation d'une nouvelle page avec les id
///////////////////idDuPhotogrtaphRecuperation////////////////
const idPhotograph = window.location.search.split("?").join("");
//////////////////////LesConteneurGlobalDeToutLesElementEnHtml///////////////////////
const photographHeader = document.querySelector(".photograph-header");
const contentImage = document.querySelector(".content-image");
const dayPrice = document.querySelector(".day-price");
const modalOpen = document.querySelector(".modal-Open-Images");

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
      affichagePhotographer();

      LesMediaDePhotograph = userMedia
        .filter((list) => list.photographerId == idPhotograph)
        .map((element) => MediaFactory.createMedia(element));

      affichageDesMedia();

      // lightBox();  
      InputTriPopularityDate();
    });
};
fetchCall();

//////////////////////FunctionAffichageDesPhotographerDansLeurPage/////////////////////////:
const affichagePhotographer = async () => {
  photographHeader.innerHTML = `
          <div class="name-photograph">
          <h2 tabindex="0">${photograph.name}</h2>
          <h3 tabindex="0">${photograph.city}, ${photograph.country}</h3>
          <p tabindex="0">${photograph.tagline}</p>
        </div>
        <button class="contact_button" onclick="displayModal()"  tabindex="0">
          Contactez-moi
        </button>
        <img
          src="./FishEye-Photos/Sample-Photos/Photographers_ID_Photos/${photograph.portrait}" 
          alt="Photo miniature de ${photograph.name}" 
          tabindex="0" 
        />`;
};
///////////////functionAffichageDesMedia/////////////////////
const affichageDesMedia = async () => {
  const resultFound = userPhotograph.find(
    (element) => element.id == idPhotograph
  );

  contentImage.innerHTML = LesMediaDePhotograph.map((media) => {
    return  media.affichage();
  }).join("");

  const heartLike = document.querySelectorAll(".icon-like")  
  for (let i = 0; i < heartLike.length; i++) {
    const element = heartLike[i];
    
    element.addEventListener("click",() => {
      console.log(element);
      console.log(i);
      LesMediaDePhotograph[i].likeHeart()
      affichageDesMedia()
      // nom(i);
    })
   } 
////////////////////////total--Like///////////////////////
   const totalLikeFunction = () => {  
  const comptTotalLike = document.querySelector(".numberPrice");
  const heartLike = document.querySelectorAll(".number-like")
    let totalLike = 0;
    for (let i = 0; i < heartLike.length; i++) {
      totalLike = totalLike + parseInt(LesMediaDePhotograph[i].likes);
      comptTotalLike.innerHTML = totalLike;
      
    }
  };
totalLikeFunction()
//////////////Price --- day//////////////
  dayPrice.innerHTML = `
  <p  tabindex="0"> ${photograph.price} / jour </p>
  `;
};
// const nom = (i) => {
//   LesMediaDePhotograph[i].likeHeart()
//   affichageDesMedia()
// }

////////////////////FunctionDeTri///////////////////////////////////////

const InputTriPopularityDate = async () => {
  const selectTri = document.querySelector("#selectName");
  const populariteTri = document.querySelector(".popularite");
  const titreTri = document.querySelector(".titre");
  const dateTri = document.querySelector(".date");
  selectTri.addEventListener("input", () => {
    if (populariteTri.selected) {
      LesMediaDePhotograph.sort((a, b) => a.likes - b.likes);
      
      affichageDesMedia();
      // lightBox();
      document.querySelector(".popularite").setAttribute("selected", "");
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
      // lightBox();
      document.querySelector(".titre").setAttribute("selected", "");
    } else if (dateTri.selected) {
      LesMediaDePhotograph.sort((a, b) => a.date - b.date);
      document.querySelector(".date").setAttribute("selected", "");
      affichageDesMedia();
      // lightBox();
    }
  });

};

/////////////////////lightBox///////////////////////////////////////////

const lightBox = async () => {
  ////////////////////all const and closeLightBox///////////////////////////
  let closeLightBox = document.querySelector(".closeLightBox");
  const titreImageLightBox = document.querySelectorAll(".content-like h3");
  const rightArrowWhenOpenModal = document.querySelector(".rightMediaLight");
  const leftArrowWhenOpenModal = document.querySelector(".leftMediaLight");
  const articlechildVideoAndImages = Array.from(
    document.querySelectorAll("article img,article video")
  );
  const maxLengthOfImageAndVideo = articlechildVideoAndImages.length;
  //////////////////variable /////////////////////////////////////////
  let index = 0;
  let element;
  let titre;

  for (let i = 0; i < articlechildVideoAndImages.length; i++) {
    let articleElement = articlechildVideoAndImages[i];
    let imageTitle = titreImageLightBox[i];

    const MediaWhenYouClick = () => {
      articleElement.classList.add("imageOpen");
      imageTitle.classList.add("image-titre-click");
      modalOpen.classList.add("display-Block");
      index = i;
      element = articleElement;
      titre = imageTitle;

      document.onkeyup = (e) => {
        if (e.key === "ArrowRight") {
          rightArrowFunction();
        }
        if (e.key === "ArrowLeft") {
          leftArrowFunction();
        }
        if (e.key === "Escape") {
          articlechildVideoAndImages[index].classList.remove("imageOpen");
          titreImageLightBox[index].classList.remove("image-titre-click");
          modalOpen.classList.remove("display-Block");
          document.onkeyup = (e) => {
            e.key === "";
          };
        }
      };
    };

    articleElement.addEventListener("click", () => {
      MediaWhenYouClick();
    });

    articleElement.addEventListener("keydown", (event) => {
      if (event.code == "Enter") {
        MediaWhenYouClick();
        
        
      }
    });
  }

  //////////////////functionArrowChangeMedia////////////////////////////
  const rightArrowFunction = () => {
    index++;
    element = articlechildVideoAndImages[index];
    titre = titreImageLightBox[index];
    if (index === maxLengthOfImageAndVideo) {
      index = maxLengthOfImageAndVideo - 1;
      articlechildVideoAndImages[index].classList.remove("imageOpen");
      titreImageLightBox[index].classList.remove("image-titre-click");

      index = 0;

      titreImageLightBox[index].classList.add("image-titre-click");
      articlechildVideoAndImages[index].classList.add("imageOpen");
    } else {
      titreImageLightBox[index].classList.add("image-titre-click");
      articlechildVideoAndImages[index].classList.add("imageOpen");
      articlechildVideoAndImages[index - 1].classList.remove("imageOpen");
      titreImageLightBox[index - 1].classList.remove("image-titre-click");
    }
  };

  const leftArrowFunction = () => {
    index--;
    element = articlechildVideoAndImages[index];
    titre = titreImageLightBox[index];
    if (index === -1) {
      index = index + 1;

      articlechildVideoAndImages[index].classList.remove("imageOpen");
      titreImageLightBox[index].classList.remove("image-titre-click");

      index = maxLengthOfImageAndVideo - 1;

      titreImageLightBox[index].classList.add("image-titre-click");
      articlechildVideoAndImages[index].classList.add("imageOpen");
    } else {
      titreImageLightBox[index].classList.add("image-titre-click");
      articlechildVideoAndImages[index].classList.add("imageOpen");
      articlechildVideoAndImages[index + 1].classList.remove("imageOpen");
      titreImageLightBox[index + 1].classList.remove("image-titre-click");
    }
  };
  ////////////////functionArrowClickEvent//////////////////////////////////////
  rightArrowWhenOpenModal.addEventListener("click", () => {
    rightArrowFunction();
  });
  leftArrowWhenOpenModal.addEventListener("click", () => {
    leftArrowFunction();
  });

  /////////////////////keyboardclick--addFunctionArrowClickEvent//////////////////

  ////////////////////closeLightBox//////////////////////////////////////////
  closeLightBox.addEventListener("click", () => {
    articlechildVideoAndImages[index].classList.remove("imageOpen");
    titreImageLightBox[index].classList.remove("image-titre-click");
    modalOpen.classList.remove("display-Block");
    document.onkeyup = (e) => {
      e.key === "";
    };
  });
};

/////////class////////:


