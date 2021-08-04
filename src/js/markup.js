import menu from '../menu.json';
import itemsTemplate from '../templates/menu-items.hbs';

const galleryMenu = document.querySelector('.js-menu');

const markup = itemsTemplate(menu);
galleryMenu.insertAdjacentHTML('beforeend', markup);
