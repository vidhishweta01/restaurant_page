import menu from '../assets/menu.jpg'

function rmenu() { //eslint-disable-line
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Menu';
  div.setAttribute('class', 'w-100 h-100 d-flex flex-column justify-content-center');
  const image = document.createElement('img');
  image.setAttribute('class', 'image');
  image.src = menu;
  div.append(h1, image);
  return div;
}

export default function menuList() {
  const element = document.createElement('div');
  element.setAttribute('id', 'id02');
  element.setAttribute('class', 'modal');
  const modalContent = document.createElement('div'); //eslint-disable-line
  modalContent.setAttribute('class', 'modal-content'); //eslint-disable-line
  const contain = document.createElement('div');
  contain.setAttribute('class', 'contain1');
  const span = document.createElement('span');
  span.setAttribute('class', 'cross1 display-top-right');
  span.innerHTML = '&times;';
  const par = document.createElement('div');
  par.setAttribute('class', 'conten1 container-fluid');
  par.append(rmenu()); //eslint-disable-line
  contain.append(span, par);
  modalContent.append(contain); //eslint-disable-line
  element.append(modalContent); //eslint-disable-line
  document.body.append(element);
}
  