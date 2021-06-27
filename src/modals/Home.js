import _ from 'lodash';

export default function HomePage() {
  const element = document.createElement('div');
  element.setAttribute('class', 'main container-fluid border-bottom p-0 border-light');
  const eatDrinkVisit = document.createElement('button');
  const hr = document.createElement('hr');
  hr.setAttribute('class', 'bg-warning w-100 m-0 ');

  eatDrinkVisit.setAttribute('class', 'eat btn-light btn-block w-50 rounded-circle mt-4');
  const h1 = document.createElement('h1');
  h1.setAttribute('class', 'head-text text-center mt-2');
  h1.innerHTML = _.join(['Eat Drink Visit']);
  eatDrinkVisit.append(h1);

  const space = document.createElement('div');
  space.setAttribute('class', 'space border-top border-light');

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
  right.setAttribute('class', 'right d-flex flex-column');

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
  document.body.append(element);
}