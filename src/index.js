import _ from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import menu from './assets/menu.jpg';
import map from './assets/map.png';

function component1() {
  const element = document.createElement('header');
    // Lodash, now imported by this script
  const container_fluid = document.createElement('div'); //eslint-disable-line
  container_fluid.setAttribute('class','container-fluid w-50'); //eslint-disable-line
  const row = document.createElement('div');
  row.setAttribute('class', 'row justify-content-between');

  const about_us = document.createElement('button');
  about_us.setAttribute('class','about-us w-25 px-0 py-2 btn-dark'); //eslint-disable-line
  about_us.innerHTML = _.join(['ABOUT US']); //eslint-disable-line
  const menu = document.createElement('button');
  menu.setAttribute('class','menu w-25 px-0 py-2 btn-dark');
  menu.innerHTML = _.join(['MENU']);
  const contact_us = document.createElement('button');
  contact_us.setAttribute('class','contact-us w-25 px-0 py-2 btn-dark'); //eslint-disable-line
  contact_us.innerHTML = _.join(['CONTACT US']); //eslint-disable-line
     
  row.append(about_us, menu, contact_us); //eslint-disable-line
  container_fluid.append(row); //eslint-disable-line
  element.append(container_fluid); //eslint-disable-line
  return element;
}

function component2() {
  const element = document.createElement('div');
  element.setAttribute('class', 'container-fluid border-bottom w-75 p-0 border-light');
  const eatDrinkVisit = document.createElement('button');
  const hr = document.createElement('hr');
  hr.setAttribute('class', 'bg-light w-100 m-0 ');

  eatDrinkVisit.setAttribute('class', 'eat btn-light btn-block w-50 rounded-circle mt-4');
  const h1 = document.createElement('h1');
  h1.setAttribute('class', 'head-text text-center mt-2');
  h1.innerHTML = _.join(['Eat Drink Visit']);
  eatDrinkVisit.append(h1);

  const space = document.createElement('div');
  space.setAttribute('class', 'space border-top border-light');
  const hr2 = document.createElement('hr');
  hr2.setAttribute('class', 'bg-light w-100 m-0 p-1 ');
  const hr3 = document.createElement('hr');
  hr3.setAttribute('class', 'bg-light w-100 m-0 p-2 ');

  const home = document.createElement('div');
  home.setAttribute('class', 'home d-flex flex-row justify-content-center border-top border-light shadow');

  const left = document.createElement('div');
  left.setAttribute('class', 'left d-flex flex-column');

  const div1 = document.createElement('div');
  div1.setAttribute('class', 'border-bottom border-light shadow h-50 mt-2');
  const h4d1 = document.createElement('h4');
  h4d1.setAttribute('class', 'h4');
  h4d1.innerHTML = _.join(['Tonight']);
  const h2d1 = document.createElement('h2');
  h2d1.setAttribute('class', 'h2');
  h2d1.innerHTML = _.join(['SPECIALS']);
  div1.append(h4d1, h2d1);

  const div2 = document.createElement('div');
  div2.setAttribute('class', 'h-50 mt-2');
  const h4d2 = document.createElement('h4');
  h4d2.setAttribute('class', 'h4');
  h4d2.innerHTML = _.join(['by the glass']);
  const h2d2 = document.createElement('h2');
  h2d2.setAttribute('class', 'h2');
  h2d2.innerHTML = _.join(['WINES']);
  div2.append(h2d2, h4d2);

  left.append(div1, div2);

  const mid = document.createElement('div');
  mid.setAttribute('class', 'mid border-left border-right shadow border-light mt-2');
  const hm1 = document.createElement('h1');
  hm1.innerHTML = _.join(['BREAKFAST']);
  const br = document.createElement('br');
  const hm2 = document.createElement('h1');
  hm2.innerHTML = _.join(['LUNCH']);
  const hm3 = document.createElement('h1');
  hm3.innerHTML = _.join(['DINNER']);

  mid.append(hm1, br, hm2, br, hm3, br);

  const right = document.createElement('div');
  right.setAttribute('class', 'right left d-flex flex-column');

  const div1r = document.createElement('div');
  div1r.setAttribute('class', 'border-bottom border-light shadow h-50 mt-2');
  const h4d1r = document.createElement('h4');
  h4d1r.setAttribute('class', 'h4');
  h4d1r.innerHTML = _.join(['Weekend']);
  const h2d1r = document.createElement('h2');
  h2d1r.setAttribute('class', 'h2');
  h2d1r.innerHTML = _.join(['BRUNCH']);
  div1r.append(h4d1r, h2d1r);

  const div2r = document.createElement('div');
  div2r.setAttribute('class', 'h-50 mt-2');
  const h4d2r = document.createElement('h4');
  h4d2r.setAttribute('class', 'h4');
  h4d2r.innerHTML = _.join(['to go all day']);
  const h2d2r = document.createElement('h2');
  h2d2r.setAttribute('class', 'h2');
  h2d2r.innerHTML = _.join(['COFFEE']);
  div2r.append(h2d2r, h4d2r);

  right.append(div1r, div2r);

  home.append(left, mid, right);

  const last = document.createElement('div');
  last.setAttribute('class', 'last d-flex flex-row border-light border-top justify-content-center');
  const l1 = document.createElement('div');
  l1.setAttribute('class', 'border-right border-light');
  const hl1 = document.createElement('h1');
  hl1.setAttribute('class', 'mt-3');
  hl1.innerHTML = _.join(['HAPPY HOURS']);
  l1.append(hl1);

  const l2 = document.createElement('div');
  const hl2 = document.createElement('h1');
  hl2.innerHTML = _.join(['DINNER ROOM']);
  const hl3 = document.createElement('h3');
  hl3.innerHTML = _.join(['private']);
  l2.append(hl3, hl2);

  last.append(l1, l2);
    
  element.append(eatDrinkVisit, br, hr, space, home, last);
  return element;
}

function about_us() {
  const element = document.createElement('div');
  element.setAttribute('class', 'about');
  const h1 = document.createElement('h1');
  h1.innerHTML = _.join([' the best tasting experience']);
  const par = document.createElement('p');
  par.innerHTML = _.join(['Granny offers you']);
  const para = document.createElement('p');
  para.setAttribute('class', 'ml-0 mr-4')
  para.innerHTML = _.join(['Granny is restaurant, bar and cafe, we have awesome recipes and most talented chefs in town']);
  const button = document.createElement('h2');
  button.innerHTML = _.join(['GET A RESERVATION NOW']);
  const btn = document.createElement('button');
  btn.setAttribute('class', 'butto');
  btn.append(button)
  element.append(par, h1, para, btn);
  return element;
}
  
function component3() {
  const element = document.createElement('div');
  element.setAttribute('id', 'id01');
  element.setAttribute('class', 'modal');
  const modal_content = document.createElement('div'); //eslint-disable-line
  modal_content.setAttribute('class', 'modal-content'); //eslint-disable-line
  const contain = document.createElement('div');
  contain.setAttribute('class', 'contain');
  const span = document.createElement('span');
  span.setAttribute('class', 'cross display-top-right');
  span.innerHTML = '&times;';
  const par = document.createElement('div');
  par.setAttribute('class', 'conten');
  par.append(about_us()); //eslint-disable-line
  contain.append(span, par);
  modal_content.append(contain); //eslint-disable-line
  element.append(modal_content); //eslint-disable-line
  return element; 
}

function menu_list() {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.innerHTML = "Menu";
  div.setAttribute('class', 'w-100 h-100 d-flex flex-column justify-content-center');
  const image = document.createElement('img');
  image.setAttribute('class', 'image');
  image.src = menu;
  div.append(h1, image);
  return div;
}

function component4() {
  const element = document.createElement('div');
  element.setAttribute('id', 'id02');
  element.setAttribute('class', 'modal');
  const modal_content = document.createElement('div'); //eslint-disable-line
  modal_content.setAttribute('class', 'modal-content'); //eslint-disable-line
  const contain = document.createElement('div');
  contain.setAttribute('class', 'contain1');
  const span = document.createElement('span');
  span.setAttribute('class', 'cross1 display-top-right');
  span.innerHTML = '&times;';
  const par = document.createElement('div');
  par.setAttribute('class', 'conten1 container-fluid');
  par.append(menu_list()); //eslint-disable-line
  contain.append(span, par);
  modal_content.append(contain); //eslint-disable-line
  element.append(modal_content); //eslint-disable-line
  return element; 
}

function contact_us() {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.innerHTML = "location";
  div.setAttribute('class', 'w-100 h-100 d-flex flex-column justify-content-center');
  const a = document.createElement('a');
  a.setAttribute('class', 'location');
  a.setAttribute('target', 'blank');
  a.href = "https://www.google.com/maps/place/Granny's+Kitchen/@28.573368,77.2213031,15z/data=!4m5!3m4!1s0x0:0x6fb497fc3f45f51d!8m2!3d28.573368!4d77.2213031";
  const image = document.createElement('img');
  image.setAttribute('class', 'image2');
  image.src = map;
  a.appendChild(image);
  const p = document.createElement('p');
  p.setAttribute('id', 'address');
  p.innerHTML = "Uday Chand Marg, South Extension, Zafar Nagar, Kotla Mubarakpur, South Extension I, New Delhi, Delhi 110003"
  div.append(h1, a, p);
  return div; 
}

function component5() {
  const element = document.createElement('div');
  element.setAttribute('id', 'id03');
  element.setAttribute('class', 'modal');
  const modal_content = document.createElement('div'); //eslint-disable-line
  modal_content.setAttribute('class', 'modal-content'); //eslint-disable-line
  const contain = document.createElement('div');
  contain.setAttribute('class', 'contain m-0 p-0');
  const span = document.createElement('span');
  span.setAttribute('class', 'cross2 display-top-right');
  span.innerHTML = '&times;';
  const par = document.createElement('div');
  par.setAttribute('class', 'conten2 container-fluid');
  par.append(contact_us()); //eslint-disable-line
  contain.append(span, par);
  modal_content.append(contain); //eslint-disable-line
  element.append(modal_content); //eslint-disable-line
  return element;
}

document.body.append(component1(), component2(), component3(), component4(), component5());

// Event Listener

const men = document.querySelector('.about-us');
men.addEventListener('click', (menu) => { //eslint-disable-line
  document.getElementById('id01').style.display = 'block';
});
const spa = document.querySelector('.cross');
spa.addEventListener('click', (corss) => { //eslint-disable-line
  document.getElementById('id01').style.display = 'none';
});

const btn = document.querySelector('.menu');
btn.addEventListener('click', (menu) => { //eslint-disable-line
  document.getElementById('id02').style.display = 'block';
});
const spa1 = document.querySelector('.cross1');
spa1.addEventListener('click', (crss) => { //eslint-disable-line
  document.getElementById('id02').style.display = 'none';
});

const btn1 = document.querySelector('.contact-us');
btn1.addEventListener('click', (menu) => {  //eslint-disable-line
  document.getElementById('id03').style.display = 'block';
});
const spa2 = document.querySelector('.cross2');
spa2.addEventListener('click', (crss) => { //eslint-disable-line
  document.getElementById('id03').style.display = 'none';
});