import { loadHome } from './home';

function createHeader() {
  const header = document.createElement('header');
  const restaurantName = document.createElement('h1');

  restaurantName.textContent = 'The Guild';

  header.classList.add('header');
  header.appendChild(restaurantName);
  header.appendChild(createNavigation());

  return header;
}

function createNavigation() {
  const nav = document.createElement('nav');
  const home = document.createElement('a');
  const menu = document.createElement('a');
  const contact = document.createElement('a');

  home.textContent = 'Home';
  menu.textContent = 'Menu';
  contact.textContent = 'Contact';

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
}

function createMain() {
  const main = document.createElement('main');
  main.appendChild(loadHome());

  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.textContent = 'Made by Haris';

  return footer;
}

function loadPage() {
  const contentDiv = document.querySelector('#content');

  contentDiv.appendChild(createHeader());
  contentDiv.appendChild(createMain());
  contentDiv.appendChild(createFooter());
}

export { loadPage };