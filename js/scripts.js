// Creating Array with three pokemon all pokemon detail from https://pokedex.org/
    let pokemonList  = [
        { name: 'Bulbasaur', height: 7, types : ['grass', 'poison'] },
        { name: 'Charmander', height: 6, types : ['Fire'] },
        { name: 'Squirtle', height: 5, types : ['Water4'] },
        
      ];
for(let i=0; i<pokemonList.length; i++){


  //looping throw the pokemon list 
  document.write(pokemonList[i].name + " height: " + pokemonList[i].height + "<br>");
  //check if the pokemon very big 
  if(pokemonList[i].height > 6  ) {
    document.write(pokemonList[i].name +  "<span> is big </span> <br>")
  }
}
