// use the  IIFE
let pokemonRepository = (function() {
// Creating Array with three pokemon all pokemon detail from https://pokedex.org/
  let pokemonList  = [
    { name: 'Bulbasaur', height: 7, types : ['grass', 'poison'] },
    { name: 'Charmander', height: 6, types : ['Fire'] },
    { name: 'Squirtle', height: 5, types : ['Water4'] },
    
  ];
  // create a function to get all pokemon 
  function getAll() {
    return pokemonList;
  }
  // create a function to add the pokemon to the array 
  function add(pokemon) {
    //check the type of the inputs to allow the user to insert just an object
    if (typeof pokemon === "object") {
      pokemonList.push(pokemon);
    } else {
      console.log("Please insert a valid Pokemon object.");
    }
  }
  return {
    add: add,
    getAll: getAll
  }
})();
console.log(pokemonRepository.getAll());
// add a new pokemon to the array 
pokemonRepository.add({ name: 'Pikachu', height:4, types : ['electric'] });
console.log(pokemonRepository.getAll());


  //looping throw the pokemon list 
  pokemonRepository.getAll().forEach(function(pokemon) {
    document.write(pokemon.name + " height: " + pokemon.height + "<br>");
     //check if the pokemon very big 
    if(pokemon.height > 6  ) {
      document.write(pokemon.name +  "<span> is big </span> <br>")
    }
  
  })