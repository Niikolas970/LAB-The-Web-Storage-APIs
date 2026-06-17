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
