export default function navBar() {
  const element = document.createElement('header');
  // Lodash, now imported by this script
  const containerfluid = document.createElement('div');
  containerfluid.setAttribute('class','container-fluid w-50');
  const row = document.createElement('div');
  row.setAttribute('class', 'row justify-content-between');

  const HOME = document.createElement('button');
  HOME.setAttribute('class','HOME w-25 px-0 py-2 btn-dark');
  HOME.innerHTML = _.join(['HOME']);
  
  const aboutus = document.createElement('button');
  aboutus.setAttribute('class','about-us w-25 px-0 py-2 btn-dark');
  aboutus.innerHTML = _.join(['ABOUT US']);

  const menu = document.createElement('button');
  menu.setAttribute('class', 'menu w-25 px-0 py-2 btn-dark');
  menu.innerHTML = _.join(['MENU']);
  const contactus = document.createElement('button');
  contactus.setAttribute('class','contact-us w-25 px-0 py-2 btn-dark');
  contactus.innerHTML = _.join(['CONTACT US']);
  
  row.append(HOME, aboutus, menu, contactus);
  containerfluid.append(row);
  element.append(containerfluid);
  document.body.append(element);
}