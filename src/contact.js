function loadContact() {
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-container');

  const form = document.createElement('form');

  const messageDiv = document.createElement('div');

  const label = document.createElement('label');
  label.for = 'message';
  label.textContent = 'Message:';

  const textArea = document.createElement('textarea');
  textArea.name = 'message';
  textArea.rows = 6;
  textArea.cols = 30;

  messageDiv.appendChild(label);
  messageDiv.appendChild(textArea);

  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('button-wrapper');

  const input = document.createElement('input');
  input.type = 'submit';
  input.value = 'Send';

  buttonDiv.appendChild(input);

  form.appendChild(createDiv('Name'));
  form.appendChild(createDiv('Email'));
  form.appendChild(messageDiv);
  form.appendChild(buttonDiv);

  const mapImg = document.createElement('img');
  mapImg.src = '../src/guildmap.jpg';
  mapImg.alt = 'A map of The Guild in the Merchant District';

  contactDiv.appendChild(form);
  contactDiv.appendChild(mapImg);

  return contactDiv;
}

function createDiv(section) {
  const div = document.createElement('div');
  
  const label = document.createElement('label');
  label.for = `${section.toLowerCase()}`;
  label.textContent = `${section}:`;

  const input = document.createElement('input');
  input.type = 'text';
  input.name = `${section.toLowerCase()}`;

  div.appendChild(label);
  div.appendChild(input);

  return div;
}

export { loadContact };