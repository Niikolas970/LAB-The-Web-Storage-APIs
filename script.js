function savePokemon() {
    if (!pokemonActual) {
        return alert("Primero tienes que seleccionar un Pókemon")
    }

    let favoritosGuardados = localStorage.getItem("favoritos");
    let favoritos;

    if (favoritosGuardados) {
        favoritos = JSON.parse(favoritosGuardados);
    } else {
        favoritos = [];
    }

    let yaExiste = favoritos.some(function (elemento) {
        return elemento.nombre === pokemonActual.nombre;
    });
    if (!yaExiste) {
        favoritos.push(pokemonActual);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        updateFavoritesList();
    }
}

console.log("savePokemon ejecutada");
function updateFavoritesList() {
    const favoritosguardados = localStorage.getItem('favoritos');
    const favoritos = favoritosguardados ? JSON.parse(favoritosguardados) : [];


    const favoritosDiv = document.getElementById('favoritos');
    favoritosDiv.innerHTML = '';

    favoritos.forEach(function (pokemon) {
        const card = document.createElement('div');
        card.innerHTML =
            '<img src="' + pokemon.image + '" alt="' + pokemon.name + '">' +
            '<p>' + pokemon.name + '</p>';
        favoritosDiv.appendChild(card);
    });

}

updateFavoritesList();
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

