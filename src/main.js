import data from './data/ghibli/ghibli.js';
const filmsdata = data["films"];
const filmshtml = document.getElementById("peliculasData"); 

 let htmls="";

 function peliculas(){
 filmsdata.forEach(pelicula =>{

    let auxPelicula = `<div class="films"> 
        <img src= "${pelicula['poster']}">
            <div>
            <h3>"${pelicula['title']}"</h3> 
            <p> 
            "${pelicula['description']}"
            </p>
            </div>
    </div>`;

    htmls+=auxPelicula;

 });

 filmshtml.innerHTML=htmls
}

peliculas ()




 function filterData(data,conditions){
  
 }

 function orderData(data,sortOrder){

 }

let botonFiltrar=document.getElementById('filtrar');
botonFiltrar.addEventListener('click',()=>{
    let filterBy="";
    filterData(filmsdata,filterBy);
})

let botonOrdenar=document.getElementById('ordenar');
botonOrdenar.addEventListener('click',()=>{
    
    let orderBy=document.getElementById('selectOrden').value;
    console.log(orderBy);
    orderData(filmsdata,orderBy)

});



