import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //eslint-disable-line
import navBar from './modals/navbar';
import homePage from './modals/Home';
import about from './modals/aboutUs';
import menuList from './modals/menu';
import contact from './modals/contactUs';

navBar();
homePage();
about();
menuList();
contact();

// Functions

function ab(){
  document.getElementById('id02').style.display = 'none';
  document.getElementById('id03').style.display = 'none';
  document.getElementById('id01').style.display = 'block';
}

function menulist() {
  document.getElementById('id01').style.display = 'none';
  document.getElementById('id03').style.display = 'none';
  document.getElementById('id02').style.display = 'block';
}

function cont() {
  document.getElementById('id01').style.display = 'none';
  document.getElementById('id02').style.display = 'none';
  document.getElementById('id03').style.display = 'block';
}

function home() {
  document.getElementById('id02').style.display = 'none';
  document.getElementById('id03').style.display = 'none';
  document.getElementById('id01').style.display = 'none';
}

function cross() {
  document.getElementById('id01').style.display = 'none';
  document.getElementById('id02').style.display = 'none';
  document.getElementById('id03').style.display = 'none';
}

// Event Listener
const men = document.querySelector('.about-us');
men.addEventListener('click', ab);

const btn = document.querySelector('.menu');
btn.addEventListener('click', menulist);

const btn1 = document.querySelector('.contact-us');
btn1.addEventListener('click', cont);

const HOME = document.querySelector('.HOME');
HOME.addEventListener('click', home);


const spa = document.querySelector('.cross');
spa.addEventListener('click', cross);

const spa1 = document.querySelector('.cross1');
spa1.addEventListener('click', cross);

const spa2 = document.querySelector('.cross2');
spa2.addEventListener('click', cross);