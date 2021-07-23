/*-------------constantes y funciones para mostrar y ocultar ----------------------*/
const btnFilms = document.getElementById("btnFilms");
const btnAbout = document.getElementById("btnAboutUs");
const logoHome = document.getElementById("logoHome");
const slider = document.getElementById("slider");
const filmsContainer = document.getElementById("filmsContainer");
const aboutContainer = document.getElementById("aboutUsContainer");

//funcion mostrar ocultar aboutUs
btnAbout.addEventListener("click", () => {
  slider.style.display = "none";
  filmsContainer.style.display = "none";
  aboutContainer.style.display = "block";
});

//funcion mostrar ocultar home
logoHome.addEventListener("click", () => {
  filmsContainer.style.display = "none";
  aboutContainer.style.display = "none";
  slider.style.display = "block";
});

//funcion mostrar ocultar peliculas
btnFilms.addEventListener("click", () => {
  filmsContainer.style.display = "block";
  aboutContainer.style.display = "none";
  slider.style.display = "none";
});
import data from "./data/ghibli/ghibli.js";
/*
//para crear una section con js
const sectionFilms = document.createElement('div');
sectionFilms.innerText= 'hola! esta es una prueba';
document.body.appendChild(sectionFilms);
//para darle un id
sectionFilms.id= 'dataFilms2';

console.log(data.films);
*/