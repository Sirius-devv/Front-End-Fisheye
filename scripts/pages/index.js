const photographSection = document.querySelector(".photographer_section");
// tableau userData
let userData = [];
// appelle du json
const callFetch = async () => {
  await fetch("data/photographers.json")
    .then((res) => res.json())
    .then((data) => {
      userData = data.photographers;
      theMedia = data.media;
    });
  console.log(theMedia);
  console.log(userData);
};
// element du json dans la page d'accueil
const userDisplay = async () => {
  await callFetch();
  photographSection.innerHTML = userData
    .map(
      (user) =>
        `
    <article>
            <a href="photographer.html?${user.id}" class="lienpage">
              <img src="./FishEye-Photos/Sample-Photos/Photographers_ID_Photos/${user.portrait}" alt="Photo-photograph-${user.name}">
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
};

userDisplay();
