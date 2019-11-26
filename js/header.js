document.addEventListener('DOMContentLoaded', function() {
    const button_open = document.querySelector('.header--navbar_open_icon');
    const button_close = document.querySelector('.header--navbar_close_icon');
    const navbar = document.querySelector('.header--navbar');

    button_open.addEventListener('click', function(){
        navbar.classList.toggle('nav-active');
    });
    button_close.addEventListener('click', function(){
        navbar.classList.toggle('nav-active');
    });

});