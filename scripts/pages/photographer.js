//Mettre le code JavaScript lié à la page photographer.html
// add like
const heartLike = document.querySelectorAll(".icon-like");
const numberLike = document.querySelector(".number-like");

heartLike.forEach((heart) => {
    heart.addEventListener("click", () => {
        if(numberLike.textContent <= 12){
            numberLike.textContent++;
            console.log("cliked");
        }else{
            numberLike.textContent--;
        }
    })
});

// heartLike.addEventListener("click", () => {
   
//    if(heartLike.clicked){
//        numberLike.textContent++;
//        console.log("something");
//    }else{
//     console.log("+1+1+1+1");
//     numberLike.textContent++;
//    }
// })
