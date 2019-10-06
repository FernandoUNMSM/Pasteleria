const preloader = document.getElementById('preloader');
setTimeout(()=>preloader.style.display="none", 3000);

const boton = document.getElementById('button');
const info = document.getElementById('info-container');
const caja = document.getElementById('caja');
const cajaContainer = document.getElementById('caja-container');
boton.addEventListener('click',mapa);

var n=0;

function mapa() {
    n++;
    info.classList.toggle('info-0');
    caja.classList.toggle('info-0');
    boton.classList.toggle('button-on');
    if(n%2 != 0) {
        boton.innerHTML="Ver informacion de contacto";
    }
    else {
        boton.innerHTML="Ver ubicacion del mapa";
    }
}


