let pokemonRepository = (function () {
  // creating a pokemon array 
  let repository = [
    {
      name: "Bulbasaur",
      height: 0.7,
      types: ["grass", "poison"],
    },
    {
      name: "Charizard",
      height: 1.7,
      types: ["fire", "flying"],
    },
    {
      name: "Squirtle",
      height: 1,
      types: ["water"],
    },
  ];
 // add a pokemon to array if the conditions are true
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  // get all pokemons 
  function getAll() {
    return repository;
  }
  
  //show details function 
  function showDetails(pokemon) {
    //log the pokemon name 
    console.log(pokemon.target.innerText);
  }
  // add pokemons to the buttons inside html 
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', showDetails)
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

// add a new pokemon to the array 
pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());
// getting all pokemon 
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

