import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function imagePaletteItems() {
  const list = document.querySelector('.gallery');
  for (const photo of galleryItems) {
    //img
    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.setAttribute('src', photo.preview);
    image.setAttribute('alt', photo.description);

    //li
    const elem = document.createElement('li');
    elem.classList.add('gallery__item');
    elem.style.listStyleType = 'none';

    //a
    const link = document.createElement('a');
    link.setAttribute('href', photo.original);
    link.classList.add('gallery__link');

    elem.appendChild(link);
    link.appendChild(image);
    list.appendChild(elem);

    //prevent default
    link.addEventListener('click', event => {
      event.preventDefault();
    });
  }
  //lightbox
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

imagePaletteItems();
