document.addEventListener('DOMContentLoaded', () => {
    const datosElemento = document.getElementById('datos-peliculas');
    const lista = document.getElementById('movieList');
    const searchInput = document.getElementById('movieSearch');

    if (!datosElemento || !lista) return;

    const peliculas = JSON.parse(datosElemento.textContent);


    function renderMovies(data) {
        lista.innerHTML = '';
        data.forEach((peli, index) => {
            const match = peli.puntuacion.match(/\(([^)]+)\)/);
            const nota = match ? match[1] : "0";

            const card = document.createElement('div');
            card.className = 'pelicula-item';
            card.innerHTML = `
                <img src="${peli.imagen}" alt="${peli.titulo}" class="peli-img">
                <div class="info-pelicula">
                    <h2>${index + 1}. ${peli.titulo}</h2>
                    <details>
                        <summary>Sinopsis</summary>
                        <p>${peli.sinopsis}</p>
                    </details>
                    <details>
                        <summary>Información</summary>
                        <div class="detalles-tecnicos">
                            <p><strong>Año:</strong> ${peli.año}</p>
                            <p><strong>Género:</strong> ${peli.genero}</p>
                            <p><strong>Dirección:</strong> ${peli.direccion}</p>
                        </div>
                    </details>
                    <div class="rating-estatico" style="--rating: ${nota};">
                        <span class="estrellas-base"></span>
                        <span class="rating-text">${nota}/10</span>
                    </div>
                </div>
            `;
            lista.appendChild(card);
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keyup', () => {
            const term = searchInput.value.toLowerCase();
            const movieItems = document.querySelectorAll('.pelicula-item');

            movieItems.forEach(item => {
                const title = item.querySelector('h2').textContent.toLowerCase();

                if (title.includes(term)) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        });
    }

    renderMovies(peliculas);
});