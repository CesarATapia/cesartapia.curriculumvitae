//Menu Navegacion
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//Ocultar despues de seleccion
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Barras de habilidades
function crearBarra(id_barra){
    for(i=0;i<=17;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//Seleccionar Barras
let html = document.getElementById("html");
crearBarra(html);
let comunicacion = document.getElementById("comunicacion");
crearBarra(comunicacion);
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);
let creatividad = document.getElementById("creatividad");
crearBarra(creatividad);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let trabajo = document.getElementById("trabajo");
crearBarra(trabajo);

//Pintar la cantidad de barras seleccionadas
let contadores = [-1,-1,-1,-1,-1,-1];
//variable de control de ejecucion
let entro = false;

//Genero las cantidades de barras
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalComunicacion = setInterval(function(){
            pintarBarra(comunicacion, 16, 1, intervalComunicacion);
        },100);
        const intervalIlustrator = setInterval(function(){
            pintarBarra(ilustrator, 15, 2, intervalIlustrator);
        },100);
        const intervalCreatividad = setInterval(function(){
            pintarBarra(creatividad, 14, 3, intervalCreatividad);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 16, 4, intervalPhotoshop);
        },100);
        const intervalTrabajo = setInterval(function(){
            pintarBarra(trabajo, 17, 5, intervalTrabajo);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#4911e3";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}