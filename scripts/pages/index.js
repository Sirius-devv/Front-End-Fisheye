// async function getPhotographers() {
//     // Penser à remplacer par les données récupérées dans le json
//     const photographers = [
//         {
//             "name": "Mimi Keel",
//             "id": 243,
//             "city": "London",
//             "country": "UK",
//             "tagline": "Voir le beau dans le quotidien",
//             "price": 400,
//             "portrait": "MimiKeel.jpg"
//         },
//         {
//             "name": "Ellie-Rose Wilkens",
//             "id": 930,
//             "city": "Paris",
//             "country": "France",
//             "tagline": "Capturer des compositions complexes",
//             "price": 250,
//             "portrait": "EllieRoseWilkens.jpg"
//         },
//         {
//             "name": "Tracy Galindo",
//             "id": 82,
//             "city": "Montreal",
//             "country": "Canada",
//             "tagline": "Photographe freelance",
//             "price": 500,
//             "portrait": "TracyGalindo.jpg"
//         },
//         {
//             "name": "Nabeel Bradford",
//             "id": 527,
//             "city": "Mexico City",
//             "country": "Mexico",
//             "tagline": "Toujours aller de l'avant",
//             "price": 350,
//             "portrait": "NabeelBradford.jpg"
//         },
//         {
//             "name": "Rhode Dubois",
//             "id": 925,
//             "city": "Barcelona",
//             "country": "Spain",
//             "tagline": "Je crée des souvenirs",
//             "price": 275,
//             "portrait": "RhodeDubois.jpg"
//         },
//         {
//             "name": "Marcel Nikolic",
//             "id": 195,
//             "city": "Berlin",
//             "country": "Germany",
//             "tagline": "Toujours à la recherche de LA photo",
//             "price": 300,
//             "portrait": "MarcelNikolic.jpg"
//         }
//     ]
//     // et bien retourner le tableau photographers seulement une fois
//     return ({
//         photographers: [...photographers]})
// }

// async function displayData(photographers) {
//     const photographersSection = document.querySelector(".photographer_section");

//     photographers.forEach((photographer) => {
//         const photographerModel = photographerFactory(photographer);
//         const userCardDOM = photographerModel.getUserCardDOM();
//         photographersSection.appendChild(userCardDOM);
//     });
// };

// async function init() {
//     // Récupère les datas des photographes
//     const { photographers } = await getPhotographers();
//     displayData(photographers);
// };

// init();


const photographSection = document.querySelector(".photographer_section");

let userData = [];




const callFetch = async () => {
  await fetch("data/photographers.json")
    .then((res) => res.json())
    .then((data) => 
    {userData = data.photographers
    theMedia = data.media
    });
  console.log(theMedia);
  console.log(userData);
};

const userDisplay = async () => {
  await callFetch();
photographSection.innerHTML = userData
.map(
  (user) =>
    `
    <article>
            <a href="photographer.html?${user.id}" class="lienpage">
              <img src="./FishEye-Photos/Sample-Photos/All-Photo/${user.portrait}" alt="Photo-photograph-${user.name}">
              <h2>${user.name}</h2>
            </a>
            <div class="description-photograph">
              <p>${user.city},${user.country} </p>
              <p>${user.tagline}</p>
              <p>${user.price}€/jour</p>
            </div>
          </article>
`
)
.join("");

//  let lienPage = document.querySelectorAll(".lienpage")
//   console.log(lienPage)

//   lienPage.forEach((lien) =>
//   lien.addEventListener("click", () => {
//     console.log('valid');
//     window.location = `photographer.html?${lien.id}` 
//   })
//   )
};

userDisplay();