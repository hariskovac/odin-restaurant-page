function loadHome() {
  const homeDiv = document.createElement('div');
  const heading = document.createElement('h1');
  const homeText = document.createElement('p');
  const menuButton = document.createElement('button');

  homeDiv.classList.add('main');
  menuButton.classList.add('button');
  heading.textContent = 'Welcome, traveller!';
  homeText.textContent = 'There\'s nothing better than a refreshing drink and a hearty meal after a long day of adventuring so pull up a chair and make yourself comfortable. We\'ll do the rest!';
  menuButton.textContent = 'Menu';

  homeDiv.appendChild(heading);
  homeDiv.appendChild(homeText);
  homeDiv.appendChild(menuButton);

  return homeDiv;
}

export { loadHome };