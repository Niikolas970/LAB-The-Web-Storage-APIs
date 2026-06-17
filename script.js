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