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
            >
            <svg
              class=""
              aria-label="icon-Heart"
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 0 24 24"
              width="28px"
              fill="#000000"
              tabindex="0"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path class="svgLike"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              /></svg>
            </span>
        </div>
      </div>
    </article>
      `;
  }

  likeHeart() {
    if (this.click === false) {
      this.likes += 1;
      this.click = true;
    } else {
      this.likes -= 1;
      this.click = false;
    }
  }

  affichageLightBox() {
    return `
   
        
          <img
            src="FishEye-Photos/Sample-Photos/${this.photographerId}/${this.image}"
             alt="${this.title}"  class="media-Open"  tabindex="0" 
            />
            <h3 class="titre-lightbox" tabindex="0"> ${this.title} </h3>
         
    `;
  }
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
          >
          <svg
          class=""
          aria-label="icon-Heart"
          xmlns="http://www.w3.org/2000/svg"
          height="28px"
          viewBox="0 0 24 24"
          width="28px"
          fill="#000000"
          tabindex="0"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path class="svgLike"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          /></svg>
          </span>
      </div>
    </div>
    </article>
          `;
  }

  likeHeart() {
    if (this.click) {
      this.likes -= 1;
      this.click = false;
    } else {
      this.likes += 1;
      this.click = true;
    }
  }

  affichageLightBox() {
    return `      
        <video controls="controls" class="media-Open" aria-label="${this.title}"  tabindex="0">
          <source src="FishEye-Photos/Sample-Photos/${this.photographerId}/${this.video}" class="video-replace"  tabindex="0">
        </video>
        <h3 class="titre-lightbox" tabindex="0"> ${this.title} </h3>
      
        
    `;
  }
}

class MediaFactory {
  static createMedia(media) {
    if (media.image) {
      return new MediaImages(
        media.image,
        media.photographerId,
        media.title,
        media.likes,
        media.date,
        media.price
      );
    }
    return new MediaVideo(
      media.video,
      media.photographerId,
      media.title,
      media.likes,
      media.date,
      media.price
    );
  }
}
