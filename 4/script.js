document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('button');
    const element = document.getElementById('deleted');

    button.addEventListener('click', function(){
        element.remove();
    })

});