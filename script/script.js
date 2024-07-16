//Este bloque realiza la función del Menú Slider
function handleEvents(){
    const botonAbrir = document.getElementById('botonAbrir');
    const botonCerrar = document.getElementById('botonCerrar');
    

    botonAbrir.addEventListener('click', handleAbrir);
    botonCerrar.addEventListener('click', handleCerrar);
}

function handleAbrir(){
    const menu = document.getElementById('contenedor__obras');
    menu.classList.add('active');
}

function handleCerrar(){
    const menu = document.getElementById('contenedor__obras');
    menu.classList.remove('active');



}


//Este bloque realiza la  función de las Tabs
const li = document.querySelectorAll(".li");
const bloque = document.querySelectorAll(".bloque");

li.forEach((cadaLi, i) => {
    li[i].addEventListener("click", () => {
        li.forEach((cadaLi, i) => {
            li[i].classList.remove("activo");
            li[i].classList.remove("textoNegrita");
            bloque[i].classList.remove("activo");
            li[i].classList.remove("sombraClick");
        });

        li[i].classList.add("activo");
        li[i].classList.add("textoNegrita");
        bloque[i].classList.add("activo");
        li[i].classList.add("sombraClick");
    });
});

// Sección Carrusel

const arrayImagenes = [
    'media/img/carouselPrimera.png',  'media/img/carouselSegunda.png',  'media/img/carouselTercera.png'  
];

let numero = 0;

const imagen = document.getElementById('imagen');

function handlerEventsCarrusel() {

    const atras = document.getElementById('atras');
    const delante = document.getElementById('delante');
    const botonesSeccion = document.getElementsByClassName('botonCirculo');

    delante.addEventListener('click', imagenDelante);
    atras.addEventListener('click', imagenAtras);

    for (let i = 0; i < botonesSeccion.length; i++) {
        botonesSeccion[i].addEventListener('click', saltaImagen);
    }
}

function saltaImagen(e) {

    const textoBoton = parseInt(e.target.innerHTML);
    numero = textoBoton - 1;
    pintaBotones();
    imagen.src = arrayImagenes[numero];
}

function imagenAtras() {

    numero--;

    if (numero < 0) {
        numero = arrayImagenes.length - 1;
    }

    pintaBotones();
    imagen.src = arrayImagenes[numero];
}

function pintaBotones() {

    const botonesSeccion = document.getElementsByClassName('botonCirculo');
    for (let i = 0; i < botonesSeccion.length; i++) {
        botonesSeccion[i].classList.remove('botonCirculoActivo');
    }
    botonesSeccion[numero].classList.add('botonCirculoActivo');
}

function imagenDelante() {

    numero++;

    if (numero === arrayImagenes.length) {
        numero = 0;
    }
    pintaBotones();

    imagen.classList.add("animacion");
    imagen.src = arrayImagenes[numero];
}

window.onload = () => {
    
    handleEvents();
    handlerEventsCarrusel();
};


