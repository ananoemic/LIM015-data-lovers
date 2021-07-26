/* eslint-disable no-console */
import data from './data/ghibli/ghibli.js';


/*slider*/
const propSlider ={
    slider: document.getElementById('slider'),
    primerSlide: null
}

const metSlider={
    inicio: function(){
        setInterval(metSlider.moverSlide, 4000);
    },
    moverSlide: function(){
        propSlider.slider.style.transition = 'all 3s ease';
        propSlider.slider.style.marginLeft = '-100%';

        setTimeout(function(){
            propSlider.primerSlide = propSlider.slider.firstElementChild;

            propSlider.slider.appendChild(propSlider.primerSlide);

            propSlider.slider.style.transition = 'unset';
            propSlider.slider.style.marginLeft = 0;
        }, 3000)
    }
}

metSlider.inicio();


/* efecto parallax*/ 

const propParallax = {

    seccion: document.querySelector('.parallax'),
    recorrido: null,
    limite: null,
    textoError: null
}

const metParallax = {

    inicio: function () {
        window.addEventListener('scroll', metParallax.scrollParallax);
    }, 
    scrollParallax: function () {
        propParallax.recorrido = window.pageYOffset;
        propParallax.limite = propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight;

        if (propParallax.recorrido > propParallax.seccion.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limite) {
            
            propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.seccion.offsetTop) / 1.5 +'px';
        }
        else {
            propParallax.seccion.style.backgroundPositionY = 0;
        }
    }
}

metParallax.inicio();

/* formulario */

const propFormulario = {
    
    formulario: document.formulario_contacto,
    elementos : document.formulario_contacto.elements,
    error: null
}

const metFormulario = {
    inicio: function () {
        for (let i = 0; i < propFormulario.elementos.length; i++) {
            if ( propFormulario.elementos[i].type  == 'text'){
                propFormulario.elementos[i].addEventListener('click', metFormulario.focusInput);
                propFormulario.elementos[i].addEventListener('focusout', metFormulario.blurInput);
            }
            
        }
        propFormulario.formulario.addEventListener('submit', metFormulario.validarInputs);
    },

    focusInput: function (e) {
        e.target.parentElement.children[1].className = 'label active'
    },
    
    blurInput: function(e) {
        if( document.querySelector('input').value == 0){
            e.target.parentElement.children[1].className = 'label';
        }
    },

    validarInputs: function (e) {
        for (let i = 0; i < propFormulario.elementos.length; i++) {
            
            if( propFormulario.elementos[i].value == ''){
                
                e.preventDefault();

                if(propFormulario.elementos[i].parentElement.children.length < 3){
                    propFormulario.error = document.createElement('p');
                    propFormulario.textoError = document.createTextNode('Por favor, llena el campo.');
                    propFormulario.error.appendChild(propFormulario.textoError);
                    propFormulario.error.className = 'error';
    
                    propFormulario.elementos[i].parentElement.appendChild(propFormulario.error);
                }           

            } else{

                if(propFormulario.elementos[i].parentElement.children.length >= 3){
                    propFormulario.error = propFormulario.elementos[i].parentElement.getElementsByTagName('p')[0];
                    propFormulario.elementos[i].parentElement.removeChild(propFormulario.error);
                }
            }
        }

    }

    
}

metFormulario.inicio();


/* scroll */

const propScroll = { 

    posicion: window.pageYOffset,
    scroll_suave: document.getElementsByClassName('scroll-suave'),
    volver_arriba: document.getElementsByClassName('volver-arriba'),
    destino: null,
    seccion_distancia: null,
    intervalo: null
}

const metScroll = {

    inicio: function () {

        for (let i = 0; i < propScroll.scroll_suave.length; i++) {
            propScroll.scroll_suave[i].addEventListener('click', metScroll.moverse);
        }
        for (let i = 0; i < propScroll.volver_arriba.length; i++){
            propScroll.volver_arriba[i].addEventListener('click', metScroll.subir)
        }
    },

    moverse: function (e) {
        e.preventDefault();
        clearInterval(propScroll.intervalo);
        propScroll.destino = e.target.getAttribute('href');
        propScroll.seccion_distancia = document.querySelector(propScroll.destino).offsetTop -84;
        
        propScroll.posicion = window.pageYOffset;
        propScroll.intervalo = setInterval(function() {
            if (propScroll.posicion < propScroll.seccion_distancia ){
                propScroll.posicion += 30;
                if( propScroll.posicion >= propScroll.seccion_distancia){
                    clearInterval(propScroll.intervalo);
                }
            } else {
                propScroll.posicion -= 30;
                if( propScroll.posicion <= propScroll.seccion_distancia){
                    clearInterval(propScroll.intervalo);
                }
            }
            window.scrollTo(0 , propScroll.posicion);

        }, 15);
    },
    subir: function(e){
        e.preventDefault();
        clearInterval(propScroll.intervalo);
        propScroll.posicion = window.pageYOffset;
        propScroll.intervalo = setInterval(function(){

            if( propScroll.posicion > 0 ){
                propScroll.posicion -= 30;

                if(propScroll.posicion <= 0){
                    clearInterval(propScroll.intervalo);
                }
            } else{
                return;
            }

            window.scrollTo(0, propScroll.posicion);

        }, 15);      

    }
}

metScroll.inicio();

/* menu movil */

const propMenu = {
    burger_menu: document.getElementById('burger_menu'),
    slideMenu: document.getElementById('slideMenu'),
    menu_activo: false,
    elem_menu: document.querySelectorAll('#slideMenu .menu-principal a')
}

const metMenu = {

    inicio: function () {
        propMenu.burger_menu.addEventListener('click', metMenu.showMenu);
        
        for(let i = 0; i <propMenu.elem_menu.length; i++){
            propMenu.elem_menu[i].addEventListener('click', metMenu.hideMenu);
        }
    },
    
    showMenu: function () {

        if( propMenu.menu_activo == false ){

            propMenu.menu_activo = true;
            propMenu.slideMenu.className = propMenu.slideMenu.className + 'active'

        } else {
            propMenu.menu_activo = false ;
            propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active','');

        }
    },

    hideMenu: function () {
        propMenu.menu_activo = false ;
        propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active','');

    }

}

metMenu.inicio();


/* desplegar filtro */

const filtroBoton = document.getElementById('filtroBoton');
const filtro = document.getElementById('nuestro_filtro');

filtroBoton.addEventListener('click', showFilter);

function showFilter () {
    filtro.style.display = 'block';
}


const filmsdata = data["films"];
const filmshtml = document.getElementById("peliculasData");

let htmls = "";

function peliculasDefault() {
  filmsdata.forEach((pelicula) => {
    let auxPelicula = `<div class="films"> 
        <img src= "${pelicula["poster"]}">
            <div>
            <h3>${pelicula["title"]}</h3> 
            <p> 
            ${pelicula["description"]}
            </p>
            <p>
            Director: ${pelicula["director"]}
            </p>
            <p>
            Producer: ${pelicula["producer"]}
            </p>
            <p>
            Date: ${pelicula["release_date"]}
            </p>
            <p>
            Score: ${pelicula["rt_score"]}
            </p>
            </div>
    </div>`;

    htmls += auxPelicula;
  });

  filmshtml.innerHTML = htmls;
}

peliculasDefault();
// Ejecutamos por defecto la función; cuando carga las peliculas al inicio (carga pagina films)

function peliculasPorSeleccion(peliculas) {
  htmls = "";
  peliculas.forEach((pelicula) => {
    let auxPelicula = `<div class="films"> 
            <img src= "${pelicula["poster"]}">
                <div>
                <h3>${pelicula["title"]}</h3> 
                <p> 
                ${pelicula["description"]}
                </p>
                <p>
                Director: ${pelicula["director"]}
                </p>
                <p>
                Producer: ${pelicula["producer"]}
                </p>
                <p>
                Date: ${pelicula["release_date"]}
                </p>
                <p>
                Score: ${pelicula["rt_score"]}
                </p>
                </div>
        </div>`;

    htmls += auxPelicula;
  });
  filmshtml.innerHTML = htmls;
}

function filterData(data, conditions) {
  //Data son las peliculas
  //El resulta ya tiene las peliculas filtradas
  let resultFilter = data.filter(
    (pelicula) => pelicula["director"] == conditions
  );
  return resultFilter;
}

function orderData(data, conditions) {
  let resultOrder = [];
  // Lo que 1ero que debemos saber es la condicion,
  // para saber como se va ordenar

  if (conditions == 1) {
    // Esta condicion es para ordenar A-Z

    resultOrder = data.sort(function (p1, p2) {
      if (p1["title"] > p2["title"]) {
        return 1;
      }
      if (p1["title"] < p2["title"]) {
        return -1;
      }
      return 0;
    });
  } else if (conditions == 2) {
    // Esta condicion es para ordenar Z-A
    resultOrder = data.sort(function (p1, p2) {
      if (p1["title"] < p2["title"]) {
        return 1;
      }
      if (p1["title"] > p2["title"]) {
        return -1;
      }
      return 0;
    });
  } else if (conditions == 3) {
    // Esta condicion es para ordenar Year(+)

    resultOrder = data.sort(function (p1, p2) {
      if (p1["release_date"] > p2["release_date"]) {
        return 1;
      }
      if (p1["release_date"] < p2["release_date"]) {
        return -1;
      }
      return 0;
    });
  } else if (conditions == 4) {
    //Esta condicion es para ordenar Year(-)
    resultOrder = data.sort(function (p1, p2) {
      if (p1["release_date"] < p2["release_date"]) {
        return 1;
      }
      if (p1["release_date"] > p2["release_date"]) {
        return -1;
      }
      return 0;
    });
  /*} else if (conditions == 5) {
    //Esta condicion es para ordenar Score(+)
    resultOrder = data.sort(function (p1, p2) {
      if (p1["rt_score"] > p2["rt_score"]) {
        return 1;
      }
      if (p1["rt_score"] < p2["rt_score"]) {
        return -1;
      }
      return 0;
    });
  } else if (conditions == 6) {
    //Esta condicion es para ordenar Score(-)
    resultOrder = data.sort(function (p1, p2) {
      console.log(p1,p2);
      if (p1["rt_score"] < p2["rt_score"]) {
        return 1;
      }
      if (p1["rt_score"] > p2["rt_score"]) {
        return -1;
      }
      return 0;
    });
  }*/
}
  else if(conditions==6){
    let resultOrder = data.sort((a,b)=>{
      return a.rt_score-b.rt_score;
    })
    return resultOrder;

  }else if(conditions==5){
    let resultOrder = data.sort((a,b)=>{
      return a.rt_score-b.rt_score;
    })
    return resultOrder.reverse();
  }
  return resultOrder;
}


let botonFiltrar = document.getElementById("filtrar");
botonFiltrar.addEventListener("click", (e) => {
  e.preventDefault();
  let filterBy = document.getElementById("selectFiltro").value;
  let result = filterData(filmsdata, filterBy);

  peliculasPorSeleccion(result);
});

let botonOrdenar = document.getElementById("ordenar");
botonOrdenar.addEventListener("click", () => {
  let orderBy = document.getElementById("selectOrden").value;
  //console.log(orderBy);
  let result = orderData(filmsdata, orderBy);
  peliculasPorSeleccion(result);
});
