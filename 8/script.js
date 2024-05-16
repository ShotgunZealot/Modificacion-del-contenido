document.addEventListener('DOMContentLoaded', function () {
    const elementos = document.querySelectorAll('.elemento');

    elementos.forEach(function (elemento) {
        elemento.addEventListener('mouseenter', function () {
           
            this.style.backgroundColor = 'lightgreen';
        });

        elemento.addEventListener('mouseleave', function () {

            this.style.backgroundColor = 'white';
        });
    });
});
