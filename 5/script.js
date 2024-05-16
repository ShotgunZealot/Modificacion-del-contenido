document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('button');
    const element = document.getElementById('element');

    button.addEventListener('click', function () {
        element.classList.toggle('anotherstyle');
    });
});