document.addEventListener('DOMContentLoaded', function(){
    let image = document.getElementById('image');
    let button = document.getElementById('button');

    const images = ['supra.jpg','gtr.jpg'];
    let index = 0;

    button.addEventListener('click', function(){
        index = (index+1) % images.length;
        image.src= images[index];

    })
    
})