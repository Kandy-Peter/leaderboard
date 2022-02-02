import './style.css';
import { getData, postData } from './renderData.js';

const form = document.querySelector('form');

document.querySelector('.refresh-btn').addEventListener('click', (e) => {
  e.preventDefault();
  getData();
});

document.querySelector('.button').addEventListener('click', (e) => {
  e.preventDefault();
  postData();
  form.reset();
});
window.onload = () => getData();
