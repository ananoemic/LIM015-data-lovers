import data from './data/ghibli/ghibli.js';
const filmsdata = data["films"];
const filmshtml = document.getElementById("peliculasData"); 

 let htmls="";

 function peliculasDefault(){
 filmsdata.forEach(pelicula =>{

    let auxPelicula = `<div class="films"> 
        <img src= "${pelicula['poster']}">
            <div>
            <h3>${pelicula['title']}</h3> 
            <p> 
            ${pelicula['description']}
            </p>
            <p>
            Director: ${pelicula['director']}
            </p>
            <p>
            Producer: ${pelicula['producer']}
            </p>
            <p>
            Date: ${pelicula['release_date']}
            </p>
            <p>
            Score: ${pelicula['rt_score']}
            </p>
            </div>
    </div>`;

    htmls+=auxPelicula;

 });

 filmshtml.innerHTML=htmls
}

peliculasDefault();// Ejecutamos por defecto la función


function peliculasPorSeleccion(peliculas){
    htmls="";
    peliculas.forEach(pelicula =>{
        let auxPelicula = `<div class="films"> 
            <img src= "${pelicula['poster']}">
                <div>
                <h3>${pelicula['title']}</h3> 
                <p> 
                ${pelicula['description']}
                </p>
                <p>
                Director: ${pelicula['director']}
                </p>
                <p>
                Producer: ${pelicula['producer']}
                </p>
                <p>
                Date: ${pelicula['release_date']}
                </p>
                <p>
                Score: ${pelicula['rt_score']}
                </p>
                </div>
        </div>`;
    
        htmls+=auxPelicula;
    
     });
     filmshtml.innerHTML=htmls;
}


 function filterData(data,conditions){
  //Data son las peliculas
  //El resulta ya tiene las peliculas filtradas
    let result=data.filter(pelicula=>pelicula['director']==conditions)
    return result;

 }

 function orderData(data,sortOrder){

 }

let botonFiltrar=document.getElementById('filtrar');
botonFiltrar.addEventListener('click',(e)=>{
    e.preventDefault();
    let filterBy=document.getElementById('selectFiltro').value;
    let result=filterData(filmsdata,filterBy);
    console.log(result);
    peliculasPorSeleccion(result);
})

let botonOrdenar=document.getElementById('ordenar');
botonOrdenar.addEventListener('click',()=>{
    
    let orderBy=document.getElementById('selectOrden').value;
    console.log(orderBy);
    orderData(filmsdata,orderBy)

});



