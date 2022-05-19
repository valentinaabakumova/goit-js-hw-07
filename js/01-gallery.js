import { galleryItems } from "./gallery-items.js";

/// .... start ..... ////////

let gallery = document.querySelector(".gallery");

// const myGallery = galleryItems.map((galleryItem) => {
//   let img = document.createElement("img");
//   img.classList.add("gallery__item");
//   img.classList.add("gallery__image");
//   img.src = `${galleryItem.preview}`;
//   img.alt = `${galleryItem.description}`;
//   img.url = `${galleryItem.original}`;
//   gallery.append(img);
//   return img;
// });

const myMarkup = galleryItems
  .map(
    (galleryItem) => `
 <div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}" onclick = "event.preventDefault()">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>
  `
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", myMarkup);

gallery.addEventListener("click", gallaryItemClick);

function gallaryItemClick(e) {
  const { target } = e;
  //   console.log("click here", target);
  //   console.log("but currentTarget here", e.currentTarget);
  //   console.log(target.src);
  //   console.log(target.alt);
  //   console.log(target.url);

  let content = `<img src="${target.dataset.source}" alt="${target.alt}"/>`;
  const instance = basicLightbox.create(content);
  instance.show();

  if (instance.visible()) {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        instance.close();
      }
    });
  }

  //   return instance;
}

///// ...... try close by Esc..... //////

// import * as basicLightbox from "basiclightbox";

// document.addEventListener("keydown", (e, instance) => {
//   if (instance.visible()) {
//     console.log("Keydown: ", e);
//     e.preventDefault();

//     if (e.code === "Escape") {
//       console.log("ciao!");
//       instance.close();
//     }
//   }
// });
