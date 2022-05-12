// creation d'une nouvelle page avec les id
/// ////////////////idDuPhotographRecuperation////////////////
const idPhotograph = window.location.search.split("?")[1];
/// ///////////////////LesConteneurGlobalDeToutLesElementEnHtml///////////////////////
const photographHeader = document.querySelector(".photograph-header");
const contentImage = document.querySelector(".content-image");
const dayPrice = document.querySelector(".day-price");
const modalOpen = document.querySelector(".modal-Open-Images");
const selectElement = document.querySelector(".select-tri");
const main = document.querySelector("#main");

/// //////////////////////LesVariablesGlobalQuiChangeEnFunction//////////////////////////

let photograph;
let userMedia = [];
let LesMediaDePhotograph = [];

/// //////////functionCallFetch/////////////////////
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
  <label for="selectName">
        <select name="selectName" id="selectName">
        <option value="" class="date">Date</option>
        <option value="" class="popularite">Popularité</option>
        <option value="" class="titre">Titre</option>
      </select>
     </label>   `;
};

const affichageDesMedia = async () => {
  contentImage.innerHTML = LesMediaDePhotograph.map((media) =>
    media.affichage()
  ).join("");
  modalOpen.innerHTML = ` <div class="closeLightBox" aria-label="buttonClose">
  <svg width="40" height="40" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="#901C1C"/>
</svg>
  </div>
  <div class="mediaLightbox">
  </div>
  <div class="rightMediaLight" aria-label="rightArrow">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="svglightArrow" viewBox="0 0 256 256" xml:space="preserve">
  <desc>Created with Fabric.js 1.7.22</desc>
  <defs>
  </defs>
  <g transform="translate(128 128) scale(0.72 0.72)" style="">
    <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)">
    <path d="M 24.25 90 c -0.896 0 -1.792 -0.342 -2.475 -1.025 c -1.367 -1.366 -1.367 -3.583 0 -4.949 L 60.8 45 L 21.775 5.975 c -1.367 -1.367 -1.367 -3.583 0 -4.95 c 1.367 -1.366 3.583 -1.366 4.95 0 l 41.5 41.5 c 1.367 1.366 1.367 3.583 0 4.949 l -41.5 41.5 C 26.042 89.658 25.146 90 24.25 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill:#901C1C ; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
  </g>
  </g>
  </svg>
  </div>
  <div class="leftMediaLight" aria-label="leftArrow">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="svglightArrow"   viewBox="0 0 256 256" xml:space="preserve">
<desc>Created with Fabric.js 1.7.22</desc>
<defs>
</defs>
<g transform="translate(128 128) scale(0.72 0.72)" style="">
	<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)">
	<path d="M 65.75 90 c 0.896 0 1.792 -0.342 2.475 -1.025 c 1.367 -1.366 1.367 -3.583 0 -4.949 L 29.2 45 L 68.225 5.975 c 1.367 -1.367 1.367 -3.583 0 -4.95 c -1.367 -1.366 -3.583 -1.366 -4.95 0 l -41.5 41.5 c -1.367 1.366 -1.367 3.583 0 4.949 l 41.5 41.5 C 63.958 89.658 64.854 90 65.75 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill:#901C1C ; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
</g>
</g>
</svg>
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

    for (let i = 0; i < imageAndVideo.length; i += 1) {
      const mediaBox = imageAndVideo[i];

      /// //////function d'ouverture de la lightbox///////////
      // eslint-disable-next-line no-loop-func
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
        if (event.code === "Enter") {
          openLightBox();
        }
      });
    }

    /// ///////////function de la lightbox/////////////////
    const clickright = () => {
      if (index === maxImageAndVideo - 1) {
        index = -1;
      }
      index += 1;
      mediaLightBox.innerHTML = LesMediaDePhotograph[index].affichageLightBox();
    };
    const clickleft = () => {
      if (index === 0) {
        index = maxImageAndVideo;
      }
      index -= 1;
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
  for (let i = 0; i < heartLike.length; i += 1) {
    const lesLikeDesMedia = heartLike[i];
    /// ///////////la function d 'incrementaion/////////////
    // eslint-disable-next-line no-loop-func
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
      if (event.code === "Enter") {
        incrementationDesMedia();
      }
    });
  }

  /// /////////////////////total--Like///////////////////////
  const totalLikeFunction = () => {
    const comptTotalLike = document.querySelector(".numberPrice");
    const heartLiketotal = document.querySelectorAll(".number-like");
    let totalLike = 0;
    for (let i = 0; i < heartLiketotal.length; i += 1) {
      totalLike += parseInt(LesMediaDePhotograph[i].likes, 10);
      comptTotalLike.innerHTML = totalLike;
    }
  };
  totalLikeFunction();
  /// ///////////Price --- day//////////////
  dayPrice.innerHTML = `
  <p  tabindex="0"> ${photograph.price} / jour </p>
  `;
};

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

const fetchCall = async () => {
  await fetch("data/photographers.json")
    .then((res) => res.json())
    .then((promise) => {
      userMedia = promise.media;
      const userPhotograph = promise.photographers;
      // eslint-disable-next-line eqeqeq
      photograph = userPhotograph.find((element) => element.id == idPhotograph);
      affichagePhotographer();

      LesMediaDePhotograph = userMedia
        // eslint-disable-next-line eqeqeq
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

/// ////////////functionAffichageDesMedia/////////////////////

/// /////////////////FunctionDeTri///////////////////////////////////////
