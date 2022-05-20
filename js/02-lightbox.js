import { galleryItems } from "./gallery-items.js";

const containerWithGalleryItems = document.querySelector(".gallery");
const myMarkup = createMarkup(galleryItems);

containerWithGalleryItems.insertAdjacentHTML("afterbegin", myMarkup);

function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="item">
            <a class="gallery__item" href="${original}" onclick="event.preventDefault()">
            <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
            </a>
      </li>
`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
