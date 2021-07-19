import data from './data/ghibli/ghibli.js';

const btnFilms= document.getElementById("btnFilms");
const btnAbout=document.getElementById("btnAboutUs");
const logoHome= document.getElementById("logoHome");
const slider= document.getElementById("slider");
const filmsContainer= document.getElementById("filmsContainer");
const aboutContainer= document.getElementById("aboutUsContainer");

//funcion mostrar ocultar peliculas 

function showFilms(){
    filmsContainer.style.display="block";
    slider.style.display="none";
    aboutContainer.style.display="none";
    }

btnFilms.addEventListener('click',showFilms);

//funcion mostrar ocultar aboutUs 

btnAbout.addEventListener('click', ()=>{
    slider.style.display="none";
    filmsContainer.style.display="none";
    aboutContainer.style.display="block";
})

//funcion mostrar ocultar home

logoHome.addEventListener('click', ()=>{
    filmsContainer.style.display="none";
    aboutContainer.style.display="none";
    slider.style.display="block";
})

