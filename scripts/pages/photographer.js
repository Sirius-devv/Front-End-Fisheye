//Mettre le code JavaScript lié à la page photographer.html

const idPhotograph = window.location.search.split("?").join("")

console.log(idPhotograph);

let userMedia = [];

const fetchCall = async () => {
    await fetch("data/photographers.json")
    .then((res) => res.json())
    .then((promise) => {userMedia = promise.media
        userPhotograph = promise.photographers
    console.log(userMedia)
    console.log(userPhotograph)}) 
}
fetchCall();

const test = async () => {
   await console.log(userMedia.map((user) => `${user.photographerId}`));
}

test();
