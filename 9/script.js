document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('boton');
    const elemento = document.getElementById('elemento');

    boton.addEventListener('click', function () {
        if (elemento.style.transform == 'scale(1.4)') {
            elemento.style.transform = 'scale(1.0)';
        } else {
            elemento.style.transform = 'scale(1.4)';
        }
    });
});
