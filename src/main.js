import data from 'data/ghibli/ghibli.js';

 
function peliculas (){

const filmshtml = document.getElementById("films"); 
const filmsdata = data["films"];

 let htmls="";

 filmsdata.forEach(pelicula =>{

    let auxPelicula = `<div class="films"> 
        <img src= "${pelicula['poster']}">
            <div>
            //h3= etiqueta de html cabecera que anida subsecciones
            <h3>"${pelicula['title']}"</h3> 
            <p> 
            "${pelicula['description']}"
            </p>
            </div>
    </div>`;

    htmls+=auxPelicula;

 }),

 filmshtml.innerHTML=htmls

}

 peliculas ()

 //para mostrar y ocultar

 function mostrarOcultar(){
     document.getElementById("films2")
 }

