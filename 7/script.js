document.addEventListener('DOMContentLoaded', function () {
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const resultadoSpan = document.getElementById('resultado');

    nombreInput.addEventListener('input', function () {
        actualizarResultado();
    });

    apellidoInput.addEventListener('input', function () {
        actualizarResultado();
    });

    function actualizarResultado() {
        const nombre = nombreInput.value.trim();
        const apellido = apellidoInput.value.trim();

        resultadoSpan.textContent = `Nombre completo: ${nombre} ${apellido}`;
    }
});
