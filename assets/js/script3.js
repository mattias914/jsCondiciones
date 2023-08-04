//Variables y elementos html

const opcion1 = document.querySelector('#select1');
const opcion2 = document.querySelector('#select2');
const opcion3 = document.querySelector('#select3');
const formulario = document.querySelector('form');
const texto = document.querySelector('#texto');

//funciones

function comprobarConstraseña() {
    const numero1 = select1.value
    const numero2 = select2.value
    const numero3 = select3.value
    if (numero1 == 9 && numero2 == 1 && numero3 == 1) {
        texto.textContent = 'password 1 correcto';
    }else if (numero1 == 7 && numero2 == 1 && numero3 == 4) {
        texto.textContent = 'password 2 es correcto';
    }else{
        texto.textContent = 'password incorrecto';
    }
}

function manejarFormulario(event){
    event.preventDefault();
    comprobarConstraseña();
}

//eventos
formulario.addEventListener('submit', manejarFormulario);