document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const inputElemento = document.getElementById('nuevo-elemento');
    const lista = document.getElementById('lista');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const nuevoElementoTexto = inputElemento.value.trim();

        if (nuevoElementoTexto !== '') {
            const nuevoElemento = document.createElement('li');
            nuevoElemento.textContent = nuevoElementoTexto;

            lista.appendChild(nuevoElemento);
            inputElemento.value = '';
        }
    });
});