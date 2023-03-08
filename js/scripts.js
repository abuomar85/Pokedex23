// Creating Array with three pokemon all pokemon detail from https://pokedex.org/
    let pokemonList  = [
        { name: 'Bulbasaur', height: 7, types : ['grass', 'poison'] },
        { name: 'Charmander', height: 6, types : ['Fire'] },
        { name: 'Squirtle', height: 5, types : ['Water4'] },
        
      ];


  //looping throw the pokemon list 
pokemonList.forEach(function(pokemon) {
  document.write(pokemon.name + " height: " + pokemon.height + "<br>");
   //check if the pokemon very big 
  if(pokemon.height > 6  ) {
    document.write(pokemon.name +  "<span> is big </span> <br>")
  }

})
