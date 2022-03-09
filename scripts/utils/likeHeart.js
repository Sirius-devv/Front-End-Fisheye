const likeElement = async () => {
  await mediaFunction();

  const contentLike = document.createElement("div");
  contentImage.appendChild(contentLike);
  contentLike.classList.add("content-totalLike");
  // const result = userMedia.filter(
  //     (list) => list.photographerId == idPhotograph
  //   );
};
likeElement();

const likeFunction = async () => {
  const heartLike = document.querySelectorAll(".fas");
  const numberLike = document.querySelectorAll(".number-like");

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
    });
  }
};

likeFunction();

// let totalLike = 0;
//   for (let i = 0; i < result.length; i++) {
//   totalLike = totalLike + user[i].like
  
// }