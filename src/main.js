import data from "./data/ghibli/ghibli.js";

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

//peliculasDefault();
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
  } else if (conditions == 5) {
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
      if (p1["rt_score"] < p2["rt_score"]) {
        return 1;
      }
      if (p1["rt_score"] > p2["rt_score"]) {
        return -1;
      }
      return 0;
    });
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