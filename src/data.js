export const filterData = (data, conditions) => {
    let resultFilter = data.filter(
        (pelicula) => pelicula["director"] == conditions
      );
      return resultFilter;
  };
  