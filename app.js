const peliculasArray = require('./peliculas');

for (const pelicula of peliculasArray) {
    console.log(`Título: ${pelicula.titulo}`);
    console.log(`ID: ${pelicula.id}`);
    console.log(`Rating: ${pelicula.rating}`);
    console.log(`Premios: ${pelicula.awards ? 'Premios disponibles' : 'No tiene premios'}`);
    console.log(`Duración: ${pelicula.length} minutos`);
    console.log(`Precio: $${pelicula.price}`);
    console.log(`Género: ${pelicula.genre}`);
    console.log('-------------------------');
}