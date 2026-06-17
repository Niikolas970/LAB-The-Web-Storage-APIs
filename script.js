const btnBuscarPokemon = document.querySelector("#buscar-pokemon");


let pokemonActual = null;


async function searchPokemon() {

    const nombrePokemon = document.querySelector("#ingresar-pokemon").value.toLowerCase();
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
        if (!response.ok) throw new Error("Pokémon no encontrado");

        const data = await response.json();
        pokemonActual = {
            nombre: data?.name,
            imagen: data?.sprites?.front_default
        };

        const contenedorBusqueda = document.querySelector("#contenedor-busqueda");

        const tarjeta = document.createElement("div")

        tarjeta.classList.add("tarjeta-pokemon")

        tarjeta.innerHTML = `
            
                <img src="${pokemonActual.imagen}" alt="imagen-pokemon" class="tarjeta-img">
                <div class="tarjeta-contenido">
                    <label class="nombre-pokemon">${pokemonActual.nombre}</label>
                    <button class="boton-favoritos">
                        ❤️ Agregar a Favoritos
                    </button>
                </div>
            
        `;

        contenedorBusqueda.innerHTML = "";

        contenedorBusqueda.appendChild(tarjeta)

    } catch (error) {
        console.error(error);
        alert("Pokémon no encontrado");
    }
}

btnBuscarPokemon.addEventListener("click", searchPokemon);


// <h3>${pokemonActual.nombre}</h3>
// <img src="${pokemonActual.imagen}" alt="${pokemonActual.nombre}">