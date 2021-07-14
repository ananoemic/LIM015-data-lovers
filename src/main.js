import data from './data/ghibli/ghibli.js';

 
function peliculas (){

const filmshtml = document.getElementById("films"); 
const filmsdata = data["films"];

 let htmls="";

 filmsdata.forEach(pelicula =>{

    let auxPelicula = `<div class="films"> 
        <img src= "${pelicula['poster']}">
            <div>
    
            <h3>"${pelicula['title']}"</h3> 
            <p> 
            "${pelicula['description']}"
            </p>
            <p> Director: "${pelicula['director']}"
            </p>
            <p> Producer: "${pelicula['producer']}"
            </p>
            
            </div>
    </div>`;

    htmls+=auxPelicula;

 }),

 filmshtml.innerHTML=htmls

}

 peliculas ()

