document.addEventListener('DOMContentLoaded', function () {
    const movieList = document.getElementById('movieList');
  const url ='http://localhost:3000/movies'
    // Realizar una solicitud GET a la API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Procesar los datos recibidos
        const movies = data.Peliculas;
        console.log(data);
  
        // Crear un HTML para mostrar la lista de películas

                                 //el map itera
        const moviesHTML = movies.map((movie) => `
          <div class="movie">
          <p><strong>Pelicula:</strong>${movie.name}</p>
            <p><strong>Sinopsis:</strong> ${movie.synopsis}</p>
            <p><strong>Genero:</strong> ${movie.genre}</p>
            <p><strong>Duracion:</strong> ${movie.duration}</p>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>Actores:</strong> ${movie.actors}</p>
          </div>
        `).join('');
  
        // Insertar la lista de películas en el elemento con id "movieList"
        movieList.innerHTML = moviesHTML;
      })
      .catch((error) => {
        console.error('Error al obtener las películas:', error);
      });


      
    const sinopsisForm = document.getElementById('sinopsisForm');

    sinopsisForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        const formData = new FormData(sinopsisForm);

        // Convierte los datos del formulario en un objeto
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Realiza una solicitud POST al servidor
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            mode: "cors",
        })
        .then((response) => response.json())
        .then((response) => {
            console.log('Película guardada:', response);
            // Puedes redirigir al usuario a la página de inicio o hacer otra acción
        })
        .catch((error) => {
            console.error('Error al guardar la película:', error);
        });
    });
  });
  
  