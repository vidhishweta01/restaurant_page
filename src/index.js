import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //eslint-disable-line
import navBar from './modals/navbar';
import homePage from './modals/Home';
import about from './modals/aboutUs'
import menuList from './modals/menu';
import contact from './modals/contactUs';

navBar();
homePage();
about();
menuList();
contact();

// Event Listener

const men = document.querySelector('.about-us');
men.addEventListener('click', (menu) => {
  document.getElementById('id02').style.display = 'none';
  document.getElementById('id03').style.display = 'none';
  document.getElementById('id01').style.display = 'block';
});
const spa = document.querySelector('.cross');
spa.addEventListener('click', (corss) => {
  document.getElementById('id01').style.display = 'none';
});

const btn = document.querySelector('.menu');
btn.addEventListener('click', (menu) => {
  document.getElementById('id01').style.display = 'none';
  document.getElementById('id03').style.display = 'none';
  document.getElementById('id02').style.display = 'block';
});
const spa1 = document.querySelector('.cross1');
spa1.addEventListener('click', (crss) => {
  document.getElementById('id02').style.display = 'none';
});

const btn1 = document.querySelector('.contact-us');
btn1.addEventListener('click', (menu) => {
  document.getElementById('id01').style.display = 'none';
  document.getElementById('id02').style.display = 'none';
  document.getElementById('id03').style.display = 'block';
});
const spa2 = document.querySelector('.cross2');
spa2.addEventListener('click', (crss) => {
  document.getElementById('id03').style.display = 'none';
});
const HOME = document.querySelector('.HOME');
HOME.addEventListener('click', (menu) => {
  document.getElementById('id02').style.display = 'none';
  document.getElementById('id03').style.display = 'none';
  document.getElementById('id01').style.display = 'none';
});