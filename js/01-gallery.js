import { galleryItems } from "./gallery-items.js";

/// .... start ..... ////////

let gallery = document.querySelector(".gallery");

const myGallery = galleryItems.map((galleryItem) => {
  let img = document.createElement("img");
  img.classList.add("gallery__item");
  img.classList.add("gallery__image");
  img.src = `${galleryItem.preview}`;
  img.alt = `${galleryItem.description}`;
  img.url = `${galleryItem.original}`;

  gallery.append(img);
  return img;
});

gallery.addEventListener("click", gallaryItemClick);

function gallaryItemClick(e) {
  const { target } = e;
  console.log("click here", target);
  console.log("but currentTarget here", e.currentTarget);

  //   console.log(target.src);
  //   console.log(target.alt);
  //   console.log(target.url);

  let content = `<img src="${target.url}" alt="${target.alt}">`;
  const instance = basicLightbox.create(content);
  instance.show();
}

///// ...... 1 ..... //////

// import * as basicLightbox from "basiclightbox";

// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `);

// instance.show();

// import * as basicLightbox from "basiclightbox";

// const instance2 = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance2.show();
