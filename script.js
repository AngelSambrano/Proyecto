document.addEventListener('DOMContentLoaded', () => {
    const jsonTexto = document.getElementById('datos-peliculas').textContent;
    const peliculas = JSON.parse(jsonTexto);
    const container = document.getElementById('movieList');

    peliculas.forEach((peli, index) => {
        // Extraemos el número de la puntuación (ej: "7.5" de "(7.5)")
        const match = peli.puntuacion.match(/\(([^)]+)\)/);
        const notaNumerica = match ? match[1] : 0;

        const movieCard = document.createElement('div');
        movieCard.className = 'pelicula-item';

        movieCard.innerHTML = `
            <img src="${peli.imagen}" alt="${peli.titulo}">
            <div class="info-pelicula">
                <h2>${index + 1}. ${peli.titulo}</h2>
                
                <details>
                    <summary>Sinopsis</summary>
                    <p>${peli.sinopsis}</p>
                </details>

                <details>
                    <summary>Información</summary>
                    <h4>Año:</h4> <p>${peli.año}</p><br>
                    <h4>Duración:</h4> <p>${peli.duracion}</p><br>
                    <h4>País:</h4> <p>${peli.pais}</p><br>
                    <h4>Dirección:</h4> <p>${peli.direccion}</p><br>
                    <h4>Género:</h4> <p>${peli.genero}</p>
                </details>

                <div class="rating-estatico" style="--rating: ${notaNumerica};">
                    <span class="estrellas-base"></span>
                    <span class="rating-text">${notaNumerica}/10</span>
                </div>
            </div>
        `;
        container.appendChild(movieCard);
    });
});