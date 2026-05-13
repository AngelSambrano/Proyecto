document.addEventListener('DOMContentLoaded', () => {
    const datosElemento = document.getElementById('datos-peliculas');
    if (!datosElemento) return;

    const peliculas = JSON.parse(datosElemento.textContent);
    const lista = document.getElementById('movieList');

    // 2. Generar las tarjetas
    peliculas.forEach((peli, index) => {
        const match = peli.puntuacion.match(/\(([^)]+)\)/);
        const nota = match ? match[1] : "0";

        const card = document.createElement('div');
        card.className = 'pelicula-item';

        card.innerHTML = `
            <img src="${peli.imagen}" 
                 alt="${peli.titulo}" 
                 class="peli-img">
            
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
                        <p><strong>Duración:</strong> ${peli.duracion}</p>
                        <p><strong>País:</strong> ${peli.pais}</p>
                        <p><strong>Dirección:</strong> ${peli.direccion}</p>
                        <p><strong>Género:</strong> ${peli.genero}</p>
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
});