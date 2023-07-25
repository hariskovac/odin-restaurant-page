import './style.css';
import  { loadHome } from './home';

const contentDiv = document.querySelector('#content');

contentDiv.appendChild(loadHome());