import map from '../assets/map.png';

function contactUs() {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.innerHTML = 'location';
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
  p.innerHTML = 'Uday Chand Marg, South Extension, Zafar Nagar, Kotla Mubarakpur, South Extension I, New Delhi, Delhi 110003';
  div.append(h1, a, p);
  return div;
}

export default function contact() {
  const element = document.createElement('div');
  element.setAttribute('id', 'id03');
  element.setAttribute('class', 'modal');
  const modalContent = document.createElement('div');
  modalContent.setAttribute('class', 'modal-content');
  const contain = document.createElement('div');
  contain.setAttribute('class', 'contain m-0 p-0');
  const span = document.createElement('span');
  span.setAttribute('class', 'cross2 display-top-right');
  span.innerHTML = '&times;';
  const par = document.createElement('div');
  par.setAttribute('class', 'conten2 container-fluid');
  par.append(contactUs());
  contain.append(span, par);
  modalContent.append(contain);
  element.append(modalContent);
  document.body.append(element);
}
