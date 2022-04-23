


class MediaImages {
  constructor(image, photographerId, title, likes, date, price) {
    this.image = image;
    this.photographerId = photographerId;
    this.title = title;
    this.likes = likes;
    this.date = date;
    this.price = price;
    this.click = false;
  }

  affichage() {
    return `
      <article>
      <img
        src="FishEye-Photos/Sample-Photos/${this.photographerId}/${this.image}"
        alt="${this.title}" class="image-replace"  tabindex="0" 
      />
      <div class="content-like">
        <h3  tabindex="0">${this.title}</h3>
        <div class="number-icon">
          <span class="number-like" aria-label="${this.likes}j'aime"  tabindex="0">${this.likes}</span>
          <span class="icon-like"  
            ><i class="fas fa-heart" tabindex="0"></i
          ></span>
        </div>
      </div>
    </article>
      `;
  }
  likeHeart () {
  
    if(this.click == false){
      this.likes++
      this.click = true;
    }else{
      this.likes--
      this.click = false;
    }
   
   
  }
//  async likesClicked (){
//    await 
//    
     
//    }
   

   


//   }


}


class MediaVideo {
  constructor(video, photographerId, title, likes, date, price) {
    this.video = video;
    this.photographerId = photographerId;
    this.title = title;
    this.likes = likes;
    this.date = date;
    this.price = price;
  }

  affichage() {
    return `
          <article>
    <video controls="controls" class="video-replace" aria-label="${this.title}"  tabindex="0">
    <source src="FishEye-Photos/Sample-Photos/${this.photographerId}/${this.video}" class="video-replace"  tabindex="0">
    </video>
    <div class="content-like">
      <h3  tabindex="0">${this.title}</h3>
      <div class="number-icon">
        <span class="number-like" aria-label="${this.likes}j'aime"  tabindex="0">${this.likes}</span>
        <span class="icon-like"  
          ><i class="fas fa-heart" tabindex="0"></i
        ></span>
      </div>
    </div>
    </article>
          `;
  }

  likeHeart () {
    if(this.click){
      this.likes--
      this.click = false;
    }else{
      this.likes++
      this.click = true;
    }
   
  }
// async likesClicked (){

//   await 
//    console.log(this.likes);
//    const heartLike = document.querySelectorAll(".icon-like")
//    for (let i = 0; i < heartLike.length; i++) {
//      const element = heartLike[i];
//      element.addEventListener("click",() => {
//        console.log(element);
//         this.likes++
//        console.log(this.likes);
//      })
     
//    }


//   }
 
  
}



class MediaFactory{
  static createMedia(media){
    if(media.image){
      return new MediaImages(media.image,
        media.photographerId,
        media.title,
        media.likes,
        media.date,
        media.price)
    } else{
      return new MediaVideo(media.video,
        media.photographerId,
        media.title,
        media.likes,
        media.date,
        media.price)
        
    }
  }
}