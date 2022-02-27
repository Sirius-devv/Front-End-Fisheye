//Mettre le code JavaScript lié à la page photographer.html
// creation d'une nouvelle page avec les id
const idPhotograph = window.location.search.split("?").join("");
const photographHeader = document.querySelector(".photograph-header");
const contentImage = document.querySelector(".content-image");
console.log(idPhotograph);

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
  const result = userMedia.filter(
    (list) => list.photographerId == idPhotograph
  );
  const resultPhoto = result.filter((list) => list.image);
  const resultVideo = result.filter((list) => list.video);
  const divVideo = document.createElement("article");
  console.log(result);
  console.log(resultPhoto);
  console.log(resultVideo);

  contentImage.innerHTML = resultPhoto
    .map(
      (user) =>
        `
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

  `
    )
    .join("");
  contentImage.appendChild(divVideo);
  console.log(divVideo);
  divVideo.classList.add("video")
  divVideo.innerHTML = resultVideo.map(
    (user) =>
      `
  
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

  `
  );
};

mediaFunction();
// <video src="FishEye-Photos/Sample-Photos/${user.photographerId}/${user.video}"></video>

// userMedia.forEach(element =>  console.log(element.photographerId))
// const found = userMedia.find(element => element.photographerId == idPhotograph )
// console.log(found);

// contentImage.innerHTML = `
// <h2> ${found.photographerId} </h2>`

//   contentImage.innerHTML = resultVideo.map((user) =>
//   `<article>
//   <video src="FishEye-Photos/Sample-Photos/${user.photographerId}/${user.video}"
//     alt="${user.title}" class="image-replace">
//     </video>
//   <div class="content-like">
//     <h3>${user.title}</h3>
//     <div class="number-icon">
//       <span class="number-like" aria-label="numberlikes">${user.likes}</span>
//       <span class="icon-like" aria-label="likes"
//         ><i class="fas fa-heart"></i
//       ></span>
//     </div>
//   </div>
// </article>
//   `)

// for(let i = 0; i < userMedia.length; i++){
//   if(userMedia[i].photographerId == idPhotograph){

//     console.log(userMedia[i].title);

//     contentImage.innerHTML =  userMedia.map((user) => `
//     <article>
//         <img
//           src="FishEye-Photos/Sample-Photos/243/Animals_Rainbow.jpg"
//           alt="Arc-en-ciel"
//         />
//         <div class="content-like">
//           <h3>${user.title}</h3>
//           <div class="number-icon">
//             <span class="number-like" aria-label="numberlikes">12</span>
//             <span class="icon-like" aria-label="likes"
//               ><i class="fas fa-heart"></i
//             ></span>
//           </div>
//         </div>
//       </article>` )

//   }

// }

//  await userMedia.map((user) => { if(user.photographerId == idPhotograph){
//     console.log(user.title);
//     const resultat = userMedia.find( data => data.photographerId == idPhotograph);
//     console.log(resultat);
//     console.log(resultat);
//    contentImage.innerHTML = `
//        <article>
//            <img
//              src="FishEye-Photos/Sample-Photos/243/Animals_Rainbow.jpg"
//              alt="Arc-en-ciel"
//            />
//            <div class="content-like">
//              <h3>${resultat.title}</h3>
//              <div class="number-icon">
//                <span class="number-like" aria-label="numberlikes">12</span>
//                <span class="icon-like" aria-label="likes"
//                  ><i class="fas fa-heart"></i
//                ></span>
//              </div>
//            </div>
//          </article>`
//   }

//   })


