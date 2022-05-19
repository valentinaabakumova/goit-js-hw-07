import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const containerWithGalleryItems = document.querySelector(".gallery");
const markUp = createGalleryMarkUp(galleryItems);

containerWithGalleryItems.insertAdjacentHTML("afterbegin", markUp);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createGalleryMarkUp(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <a class="gallery__item" href="${original}" onclick="event.preventDefault()">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>
`;
    })
    .join("");
}
