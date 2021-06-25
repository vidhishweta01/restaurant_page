function about_us() {
    const element = document.createElement('div');
    element.setAttribute('class', 'about');
    const h1 = document.createElement('h1');
    h1.innerHTML = _.join([' the best tasting experience']);
    const par = document.createElement('p');
    par.innerHTML = _.join(['Granny offers you']);
    const para = document.createElement('p');
    par.innerHTML = _.join(['Granny is restaurant, bar and cafe, we have awesome recipes and most talented chefs in town']);
    const button = document.createElement('h2');
    button.setAttribute('class', 'border-light');
    button.innerHTML = _.join(['GET A RESERVATION NOW']);
    element.append(par, h1, para, button);
    document.querySelector('conten').appendChild(element);    
}