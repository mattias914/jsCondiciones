// variables y elemtnos html

const cantidadSticker1 = document.querySelector('#sticker1');
const cantidadSticker2 = document.querySelector('#sticker2');
const cantidadSticker3 = document.querySelector('#sticker3');
const formulario = document.querySelector('#form');
const texto = document.querySelector('#texto');

//funciones

function cantidadStickers() {
    const total = parseInt(cantidadSticker1.value) + parseInt(cantidadSticker2.value) + parseInt(cantidadSticker3.value);
    if ( parseInt(total) <= 10 ){
        texto.textContent = total;
    }else{
        texto.textContent = 'demasiados'
    }
}
function manejarFormulario(evento){
    evento.preventDefault();
    cantidadStickers();
}

//eventos
formulario.addEventListener('submit', manejarFormulario);