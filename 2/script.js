document.addEventListener('DOMContentLoaded', function () {
    let element = document.createElement('p');
    let text = document.createTextNode('Texto añadido al final del documento');
    element.appendChild(text);
    document.body.appendChild(element);
})