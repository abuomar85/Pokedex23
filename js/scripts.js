let pokemonRepository = (function () {
  // creating a pokemon array 
  let pokemonList = [];

  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    // get all pokemons 
    function getAll() {
      return pokemonList;
    }

  // add a pokemon to array if the conditions are true
    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon
      ) { pokemonList.push(pokemon)}
      else {
        console.log("pokemon is not correct");
      }
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
      button.addEventListener('click', function(event) {
        showDetails(pokemon)
      })
    }

  //load list of pokemons 
  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon)
      });
    }).catch(function(e) {
      console.error(e)
    })
  }
 
  //load pokemon details 
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
 


  
  //show details function 
  function showDetails(pokemon) {
    //log the pokemon name 
    //console.log(pokemon.target.innerText);
    loadDetails(pokemon).then(function() {
      console.log(pokemon)
    })
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList:loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();


console.log(pokemonRepository.getAll());
// getting all pokemon 

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon)
  })
}); 