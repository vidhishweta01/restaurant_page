import _ from 'lodash';

function aboutUs() {
  const element = document.createElement('div');
  element.setAttribute('class', 'about');
  const h1 = document.createElement('h1');
  h1.innerHTML = _.join([' the best tasting experience']);
  const par = document.createElement('p');
  par.innerHTML = _.join(['Granny offers you']);
  const para = document.createElement('p');
  para.setAttribute('class', 'ml-0 mr-4');
  para.innerHTML = _.join(['Granny is restaurant, bar and cafe, we have awesome recipes and most talented chefs in town']);
  const button = document.createElement('h2');
  button.innerHTML = _.join(['GET A RESERVATION NOW']);
  const btn = document.createElement('button');
  btn.setAttribute('class', 'butto');
  btn.append(button);
  element.append(par, h1, para, btn);
  return element;
}

export default function about() {
  const element = document.createElement('div');
  element.setAttribute('id', 'id01');
  element.setAttribute('class', 'modal');
  const modalContent = document.createElement('div');
  modalContent.setAttribute('class', 'modal-content');
  const contain = document.createElement('div');
  contain.setAttribute('class', 'contain');
  const span = document.createElement('span');
  span.setAttribute('class', 'cross display-top-right');
  span.innerHTML = '&times;';
  const par = document.createElement('div');
  par.setAttribute('class', 'conten');
  par.append(aboutUs());
  contain.append(span, par);
  modalContent.append(contain);
  element.append(modalContent);
  document.body.append(element);
}