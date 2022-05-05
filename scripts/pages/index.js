const photographSection = document.querySelector(".photographer_section");
// tableau userData
let userData = [];
// appelle du json
const callFetch = async () => {
  await fetch("data/photographers.json")
    .then((res) => res.json())
    .then((data) => {
      userData = data.photographers;
    });
};
// affichage des photograph page d accueil
// element du json dans la page d'accueil

const affichageDesPhotographDansLaccueil = async () => {
  await callFetch();
  photographSection.innerHTML = userData
    .map(
      (user) =>
        `
    <article>
            <a href="photographer.html?${user.id}" class="lienpage">
              <img src="./FishEye-Photos/Sample-Photos/Photographers_ID_Photos/${user.portrait}" alt="lien-vers-le-photograph-${user.name}" tabindex="0">
              <h2 tabindex="0">${user.name}</h2>
            </a>
            <div class="description-photograph">
              <p tabindex="0">${user.city},${user.country} </p>
              <p tabindex="0">${user.tagline}</p>
              <p tabindex="0">${user.price}€/jour</p>
            </div>
          </article>
`
    )
    .join("");
};

affichageDesPhotographDansLaccueil();
