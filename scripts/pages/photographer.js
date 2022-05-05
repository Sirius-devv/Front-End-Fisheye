// creation d'une nouvelle page avec les id
/// ////////////////idDuPhotographRecuperation////////////////
const idPhotograph = window.location.search.split("?").join("");
/// ///////////////////LesConteneurGlobalDeToutLesElementEnHtml///////////////////////
const photographHeader = document.querySelector(".photograph-header");
const contentImage = document.querySelector(".content-image");
const dayPrice = document.querySelector(".day-price");
const modalOpen = document.querySelector(".modal-Open-Images");
const selectElement = document.querySelector(".select-tri");

/// //////////////////////LesVariablesGlobalQuiChangeEnFunction//////////////////////////

let photograph;
let userMedia = [];
let LesMediaDePhotograph = [];

/// //////////functionCallFetch/////////////////////
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

      LesMediaDePhotograph.sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        }
        if (a.title > b.title) {
          return -1;
        }
        return 0;
      });

      affichageDesMedia();
      InputTriPopularityDate();
    });
};
fetchCall();

/// ///////////////////FunctionAffichageDesPhotographerDansLeurPage/////////////////////////:
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
  selectElement.innerHTML = `
        <select name="selectName" id="selectName">
        <option value="" class="date">Date</option>
        <option value="" class="popularite">Popularité</option>
        <option value="" class="titre">Titre</option>
      </select>
        `;
};
/// ////////////functionAffichageDesMedia/////////////////////
const affichageDesMedia = async () => {
  contentImage.innerHTML = LesMediaDePhotograph.map((media) =>
    media.affichage()
  ).join("");
  modalOpen.innerHTML = ` <div class="closeLightBox" aria-label="buttonClose">
  <i class="fa-solid fa-xmark"></i>
  </div>
  <div class="mediaLightbox">
  </div>
  <div class="rightMediaLight" aria-label="rightArrow">
  <i class="fa-solid fa-angle-right"></i>
  </div>
  <div class="leftMediaLight" aria-label="leftArrow">
  <i class="fa-solid fa-angle-left" aria-label="leftArrow"></i>
  </div> `;

  let index = 0;
  /// ///////////lightBox/////////////////////
  const lightBox = () => {
    /// /////////const de la lightbox///////////////////////
    const mediaLightBox = document.querySelector(".mediaLightbox");
    const modalLightBox = document.querySelector(".modal-Open-Images");
    const closeLightBox = document.querySelector(".closeLightBox");
    const rightMediaLight = document.querySelector(".rightMediaLight");
    const leftMediaLight = document.querySelector(".leftMediaLight");
    const imageAndVideo = Array.from(
      document.querySelectorAll("article img,article video")
    );
    const maxImageAndVideo = imageAndVideo.length;

    for (let i = 0; i < imageAndVideo.length; i++) {
      const mediaBox = imageAndVideo[i];

      /// //////function d'ouverture de la lightbox///////////
      const openLightBox = () => {
        index = i;
        modalLightBox.classList.add("display-Block");
        mediaLightBox.innerHTML =
          LesMediaDePhotograph[index].affichageLightBox();
        main.classList.add("display-none");
      };
      /// //////////au click//////////////
      mediaBox.addEventListener("click", () => {
        openLightBox();
      });
      /// ////////////au clavier/////////////////
      mediaBox.addEventListener("keydown", (event) => {
        if (event.code == "Enter") {
          openLightBox();
        }
      });
    }

    /// ///////////function de la lightbox/////////////////
    const clickright = () => {
      if (index == maxImageAndVideo - 1) {
        index = -1;
      }
      index++;
      mediaLightBox.innerHTML = LesMediaDePhotograph[index].affichageLightBox();
    };
    const clickleft = () => {
      if (index == 0) {
        index = maxImageAndVideo;
      }
      index--;
      mediaLightBox.innerHTML = LesMediaDePhotograph[index].affichageLightBox();
    };
    const clickclose = () => {
      modalLightBox.classList.remove("display-Block");
      main.classList.remove("display-none");
      index = 0;
    };
    /// ///////////////evenement de la lightBox//////////////////::
    rightMediaLight.addEventListener("click", () => {
      clickright();
    });
    leftMediaLight.addEventListener("click", () => {
      clickleft();
    });

    closeLightBox.addEventListener("click", () => {
      clickclose();
    });

    document.onkeyup = (e) => {
      if (e.key === "ArrowRight") {
        clickright();
      }
      if (e.key === "ArrowLeft") {
        clickleft();
      }
      if (e.key === "Escape") {
        clickclose();
      }
    };
  };

  lightBox();

  /// ////////////////function d'incrementation////////////
  const heartLike = document.querySelectorAll(".icon-like");
  for (let i = 0; i < heartLike.length; i++) {
    const lesLikeDesMedia = heartLike[i];
    /// ///////////la function d 'incrementaion/////////////
    const incrementationDesMedia = () => {
      LesMediaDePhotograph[i].likeHeart();
      affichageDesMedia();
    };
    /// ////////// au click///////////////
    lesLikeDesMedia.addEventListener("click", () => {
      incrementationDesMedia();
    });
    /// /////////////au clavier//////////////
    lesLikeDesMedia.addEventListener("keydown", (event) => {
      if (event.code == "Enter") {
        incrementationDesMedia();
      }
    });
  }

  /// /////////////////////total--Like///////////////////////
  const totalLikeFunction = () => {
    const comptTotalLike = document.querySelector(".numberPrice");
    const heartLike = document.querySelectorAll(".number-like");
    let totalLike = 0;
    for (let i = 0; i < heartLike.length; i++) {
      totalLike += parseInt(LesMediaDePhotograph[i].likes);
      comptTotalLike.innerHTML = totalLike;
    }
  };
  totalLikeFunction();
  /// ///////////Price --- day//////////////
  dayPrice.innerHTML = `
  <p  tabindex="0"> ${photograph.price} / jour </p>
  `;
};

/// /////////////////FunctionDeTri///////////////////////////////////////

const InputTriPopularityDate = async () => {
  const selectTri = document.querySelector("#selectName");
  const populariteTri = document.querySelector(".popularite");
  const titreTri = document.querySelector(".titre");
  const dateTri = document.querySelector(".date");
  selectTri.addEventListener("input", () => {
    if (populariteTri.selected) {
      LesMediaDePhotograph.sort((a, b) => a.likes - b.likes);

      affichageDesMedia();

      document.querySelector(".popularite").setAttribute("selected", "");
    } else if (titreTri.selected) {
      LesMediaDePhotograph.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });

      affichageDesMedia();

      document.querySelector(".titre").setAttribute("selected", "");
    } else if (dateTri.selected) {
      LesMediaDePhotograph.sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        }
        if (a.title > b.title) {
          return -1;
        }
        return 0;
      });

      document.querySelector(".date").setAttribute("selected", "");
      affichageDesMedia();
    }
  });
};
