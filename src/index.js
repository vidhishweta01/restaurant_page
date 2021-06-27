import _ from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //eslint-disable-line
import navBar from './modals/navbar.js';
import homePage from './modals/Home.js';
import about from './modals/aboutUs.js'
import menuList from './modals/menu.js';
import contact from './modals/contactUs.js';

navBar();
homePage();
about();
menuList();
contact();

// Event Listener

const men = document.querySelector('.about-us');
men.addEventListener('click', (menu) => { //eslint-disable-line
  document.getElementById('id02').style.display = 'none';
  document.getElementById('id03').style.display = 'none';
  document.getElementById('id01').style.display = 'block';
});
const spa = document.querySelector('.cross');
spa.addEventListener('click', (corss) => { //eslint-disable-line
  document.getElementById('id01').style.display = 'none';
});

const btn = document.querySelector('.menu');
btn.addEventListener('click', (menu) => { //eslint-disable-line
  document.getElementById('id01').style.display = 'none';
  document.getElementById('id03').style.display = 'none';
  document.getElementById('id02').style.display = 'block';
});
const spa1 = document.querySelector('.cross1');
spa1.addEventListener('click', (crss) => { //eslint-disable-line
  document.getElementById('id02').style.display = 'none';
});

const btn1 = document.querySelector('.contact-us');
btn1.addEventListener('click', (menu) => {  //eslint-disable-line
  document.getElementById('id01').style.display = 'none';
  document.getElementById('id02').style.display = 'none';
  document.getElementById('id03').style.display = 'block';
});
const spa2 = document.querySelector('.cross2');
spa2.addEventListener('click', (crss) => { //eslint-disable-line
  document.getElementById('id03').style.display = 'none';
});
const HOME = document.querySelector('.HOME');
HOME.addEventListener('click', (menu) => { //eslint-disable-line
  document.getElementById('id02').style.display = 'none';
  document.getElementById('id03').style.display = 'none';
  document.getElementById('id01').style.display = 'none';
});