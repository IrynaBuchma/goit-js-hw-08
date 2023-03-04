const SimpleLightbox = require('simple-lightbox');
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery'); 

gallery.addEventListener('click', onImageClick);

const markedGallery = markupGallery(galleryItems);

gallery.innerHTML = markedGallery; //



function markupGallery(items) {
    return items.map(({ preview, original, description }) => { 
        return ` 
            <div class="gallery__item"> 
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
                </a>
            </div>`;
    }).join(''); 
};

function onImageClick(e) {
    if (!e.target.classList.contains("gallery__image")) {
        return;
    }
    e.preventDefault();
    
    
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="" height="">
`)
    instance.show();
    document.addEventListener("keydown", onEscapePress);
    document.body.classList.add(".js-open-modal");

function onEscapePress(e) {
    if (e.code === "Escape" && basicLightbox.visible()) {
    closeModal();
  }
};

function closeModal() {
    document.removeEventListener("keydown", onEscapePress);
    document.body.classList.remove(".js-close-modal");
    instance.close();
}
};

console.log(galleryItems);
