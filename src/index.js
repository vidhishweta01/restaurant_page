import _ from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function component1() {
    const element = document.createElement('header');
    // Lodash, now imported by this script
    const container_fluid = document.createElement('div');
    container_fluid.setAttribute('class','container-fluid w-50');
    const row = document.createElement('div');
    row.setAttribute('class', 'row justify-content-between');

    const about_us = document.createElement('button');
    about_us.setAttribute('class','about-us w-25 py-2 btn-dark');
    about_us.innerHTML = _.join(['About us']);
    const menu = document.createElement('button');
    menu.setAttribute('class','menu w-25 py-2 btn-dark');
    menu.innerHTML = _.join(['menu']);
    const contact_us = document.createElement('button');
    contact_us.setAttribute('class','contact-us w-25 py-2 btn-dark');
    contact_us.innerHTML = _.join(['Contact us']);
     
    row.append(about_us, menu, contact_us);
    container_fluid.append(row);
    element.append(container_fluid);
    return element;
}

function component2() {
    const element = document.createElement('div');
    
    
}
  
function component3() {
    const element = document.createElement('div');
    element.setAttribute('id', 'id01');
    element.setAttribute('class', 'modal');
    const modal_content = document.createElement('div');
    modal_content.setAttribute('class', 'modal-content');
    const contain = document.createElement('div');
    contain.setAttribute('class', 'contain');
    const span = document.createElement('span');
    span.setAttribute('class', 'cross display-top-right');
    span.innerHTML = '&times;';
    const par = document.createElement('div');
    par.setAttribute('class', 'content');
    par.innerHTML = 'hello';
    contain.append(span, par);
    modal_content.append(contain);
    element.append(modal_content);
    return element;  
}
document.body.append(component1(), component2());

let a = ['.about-us', '.menu', '.contact-us'];
for (let i = 0; i < 3; i++) {
    let men = document.querySelector(a[i]);
    men.addEventListener('click', (menu) => {
        document.getElementById('id01').style.display = 'block';
    });
    const spa = document.querySelector('.cross');
spa.addEventListener('click', (corss) => {
    document.getElementById('id01').style.display = 'none';
});
}




