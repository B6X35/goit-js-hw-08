// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryListEl = document.querySelector('.gallery')

const imgEl = galleryItems.map(img => 
    `<a class="gallery__link" href="${img.original}">
        <img
            class="gallery__image"
            src="${img.preview}"
            alt="${img.description}"
        />
    </a>`)
    .join('');
galleryListEl.insertAdjacentHTML("afterbegin", imgEl);
let lightbox = new SimpleLightbox('.gallery a[href*="jpg"]', {
    nav: true,
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});


console.log(galleryItems);