//variaveis
//var ou let
//document

let menuAbrir = document.getElementById('menuToggle');

//Evento = açao

menuAbrir.addEventListener('click', function(){
    let menu = document.querySelector('.menu');
    menu.style.right = '0';
})


let menuFechar = document.getElementById('menuClose');

menuFechar.addEventListener('click', function(){
    let menu = document.querySelector('.menu');
    menu.style.right = '-100%';
})