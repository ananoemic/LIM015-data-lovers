import data from './data/ghibli/ghibli.js';



/*variables*/

const screen1 = document.querySelector('#principalScreen');
const screen2 = document.querySelector('#filmScreen');
const screen3 = document.querySelector ('#staffScreen');
const screen4 = document.querySelector ('#aboutScreen');

const homeButton = document.querySelector('#homeButton');
const filmButton = document.querySelector('#filmsButton');
const staffButton = document.querySelector('#staffButton');
const aboutButton = document.querySelector('#aboutButton');

homeButton.addEventListener('click', showMainScreen);
function showMainScreen() {
    screen1.style.display = 'none';
    screen2.style.display = 'none';
    screen3.style.display = 'none';
    screen4.style.display = 'none';
}

filmButton.addEventListener("click", showFilmScreen );
function showFilmScreen (){
    screen2.style.display = 'block';
    screen1.style.display = 'none';
    screen3.style.display = 'none';
    screen4.style.display = 'none';
}

staffButton.addEventListener("click", showStaffScreen );
function showStaffScreen (){
    screen3.style.display = 'block';
    screen1.style.display = 'none';
    screen2.style.display = 'none';
    screen4.style.display = 'none';
}

aboutButton.addEventListener("click", showAbout )
function showAbout (){
    screen4.style.display = 'block';
    screen1.style.display = 'none';
    screen2.style.display = 'none';
    screen3.style.display = 'none';
}







// function peliculas (){

// const filmshtml = document.getElementById("films"); 
// const filmsdata = data["films"];

//  let htmls="";

//  filmsdata.forEach(pelicula =>{

//     let auxPelicula = `<div class="films"> 
//         <img src= "${pelicula['poster']}">
//             <div>
    
//             <h3>"${pelicula['title']}"</h3> 
//             <p> 
//             "${pelicula['description']}"
//             </p>
//             <p> Director: "${pelicula['director']}"
//             </p>
//             <p> Producer: "${pelicula['producer']}"
//             </p>
            
//             </div>
//     </div>`;

//     htmls+=auxPelicula;

//  }),

//  filmshtml.innerHTML=htmls



//  peliculas ()

