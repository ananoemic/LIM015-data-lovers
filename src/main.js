import data from 'data/ghibli/ghibli.js';

const btnFilms= document.getElementById("btnFilms");
const btnAbout=document.getElementById("btnAboutUs");
const slider= document.getElementById("slider");
const filmsContainer= document.getElementById("filmsContainer");
const aboutContainer= document.getElementById("aboutUsContainer");

//funcion mostrar ocultar peliculas 

function showFilms(){
    slider.style.display="none";
    filmsContainer.style.display="block";
    }

btnFilms.addEventListener('click',showFilms);


