// let MimiKeel = {
//   name: "Mimi Keel",
//   id: 243,
//   city: "London",
//   country: "UK",
//   tagline: "Voir le beau dans le quotidien",
//   price: 400,
//   portrait: "MimiKeel.jpg",
// };
// let Ellie = {
//   name: "Ellie-Rose Wilkens",
//   id: 930,
//   city: "Paris",
//   country: "France",
//   tagline: "Capturer des compositions complexes",
//   price: 250,
//   portrait: "EllieRoseWilkens.jpg",
// };
// let Tracy = {
//   name: "Tracy Galindo",
//   id: 82,
//   city: "Montreal",
//   country: "Canada",
//   tagline: "Photographe freelance",
//   price: 500,
//   portrait: "TracyGalindo.jpg",
// };
// let Nabeel = {
//   name: "Nabeel Bradford",
//   id: 527,
//   city: "Mexico City",
//   country: "Mexico",
//   tagline: "Toujours aller de l'avant",
//   price: 350,
//   portrait: "NabeelBradford.jpg",
// };
// let Rhode = {
//   name: "Rhode Dubois",
//   id: 925,
//   city: "Barcelona",
//   country: "Spain",
//   tagline: "Je crée des souvenirs",
//   price: 275,
//   portrait: "RhodeDubois.jpg",
// };
// let Marcel = {
//   name: "Marcel Nikolic",
//   id: 195,
//   city: "Berlin",
//   country: "Germany",
//   tagline: "Toujours à la recherche de LA photo",
//   price: 300,
//   portrait: "MarcelNikolic.jpg",
// };

// let kiwi = {
//   nom: "kiwi",
//   poids: "100g",
//   vitamines: "C, B, E",
// };
// let citron = {
//   nom: "citron",
//   poids: "300g",
//   vitamines: "C",
// };
// function indexPhotograph(data) {
//   return `<article>
//             <a href="photographer.html" id="${data.id}">
//               <img src="./FishEye-Photos/Sample-Photos/All-Photo/${data.portrait}" alt="Photo-photograph-MimiKeel">
//               <h2>${data.name}</h2>
//             </a>
//             <div class="description-photograph">
//               <p>${data.country}, ${data.city} </p>
//               <p>${data.tagline}</p>
//               <p>${data.price}€/jour</p>
//             </div>
//           </article>`;
// }
// document.querySelector(".photographer_section").innerHTML +=
//   indexPhotograph(MimiKeel) +
//   indexPhotograph(Ellie) +
//   indexPhotograph(Tracy) +
//   indexPhotograph(Nabeel) +
//   indexPhotograph(Rhode) +
//   indexPhotograph(Marcel);

//  ///////////index.html javascript ^/////////////

// add like

// let Lonesome = {
//     "id": 623534343,
//     "photographerId": 243,
//     "title": "Lonesome",
//     "image": "Travel_Lonesome.jpg",
//     "likes": 88,
//     "date": "2019-02-03",
//     "price": 45
// }
// let Hillside  = {
//     "id": 625025343,
//     "photographerId": 243,
//     "title": "Hillside Color",
//     "image": "Travel_HillsideColor.jpg",
//     "likes": 85,
//     "date": "2019-04-03",
//     "price": 45
// }
// let Wednesday = {
//     "id": 2525345343,
//     "photographerId": 243,
//     "title": "Wednesday Potrait",
//     "image": "Portrait_Wednesday.jpg",
//     "likes": 34,
//     "date": "2019-04-07",
//     "price": 45
// }
// let Nora = {
//     "id": 2523434634,
//     "photographerId": 243,
//     "title": "Nora Portrait",
//     "image": "Portrait_Nora.jpg",
//     "likes": 63,
//     "date": "2019-04-07",
//     "price": 45
// }
// let RawBlack = {
//     "id": 398847109,
//     "photographerId": 243,
//     "title": "Raw Black Portrait",
//     "image": "Portrait_Background.jpg",
//     "likes": 55,
//     "date": "2019-06-20",
//     "price": 45
// }
// let Seaside = {
//     "id": 2534342,
//     "photographerId": 243,
//     "title": "Seaside Wedding",
//     "image": "Event_SeasideWedding.jpg",
//     "likes": 25,
//     "date": "2019-06-21",
//     "price": 45
// }
// let Boulder = {
//     "id": 65235234,
//     "photographerId": 243,
//     "title": "Boulder Wedding",
//     "image": "Event_PintoWedding.jpg",
//     "likes": 52,
//     "date": "2019-06-25",
//     "price": 45
// }
// let Benevides = {
//     "id": 23523434,
//     "photographerId": 243,
//     "title": "Benevides Wedding",
//     "image": "Event_BenevidesWedding.jpg",
//     "likes": 77,
//     "date": "2019-06-28",
//     "price": 45
// }
// let Wild = {
//     "id": 5234343,
//     "photographerId": 243,
//     "title": "Wild horses in the mountains",
//     "video": "Animals_Wild_Horses_in_the_mountains.mp4",
//     "likes": 142,
//     "date": "2019-08-23",
//     "price": 60
// }
// const photographHeader = document.querySelector(".photograph-header");

// let data = [];

// const nameFetch = async () => {
//   await fetch("data/photographers.json")
//     .then((res) => res.json())
//     .then((promise) => (data = promise));
//   console.log(data);
// };

// const userDisplay = async () => {
//   await nameFetch();
//   photographHeader.innerHTML = 
//   `
//    <div class="name-photograph" >
//          <h2>${data.photographers[0].name} Keel</h2>
//          <h3>London, UK</h3>
//           <p>Voir le beau dans le quotidien</p>
//         </div>
//         <button class="contact_button" onclick="displayModal()">
//           Contactez-moi
//         </button>
//         <img
//           src="./FishEye-Photos/Sample-Photos/All-Photo/MimiKeel.jpg"
//           alt="Photo-photograph-MimiKeel"
//         />
//    ` 
  
// };

// document.body.addEventListener("click", async () => {
//   await userDisplay();
  
// });
