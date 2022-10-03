let pokemonRepository = (function () {
  let pokemonList = [
    
  ]

  function add(pokemon){
    pokemonList.push(pokemon);
  };

  function getAll(){
    return pokemonList;
  };

  function showDetials(pokemon){
    console.log(pokemon)
  };

  function addListItem(pokemon){
    let pokemon_list = document.querySelector('.pokemon-list');
    let createli = document.createElement('li');
    let createbut = document.createElement('button');

    createbut.innerText = pokemon.dexNum + ' ' + pokemon.name;

    createbut.addEventListener('click', function(pokemon) {
      console.log(createbut.innerText)
    });    

    createli.appendChild(createbut);

    pokemon_list.appendChild(createli);

    createli.classList.add('pokemon')
  };

  function loadList() {
    return fetch ('https://pokeapi.co/api/v2/pokemon/?limit=151').then(function(response) {
      return response.json;
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          deatsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e)
    });
  };

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showdetails: showDetials,
    loadList: loadList,
  }; 
})();

//let max = pokemonRepository.getAll()[0].height

//pokemonRepository.getAll().forEach(function(pokemon) {
  //if (pokemon.height > max) {
    //max = pokemon.height
  //}
//});

pokemonRepository.loadList().then(function() {

  pokemonRepository.getAll().forEach(function(pokemon) {
  
    pokemonRepository.addListItem(pokemon)

    if (pokemon.height < .7) {
    
    }

    else if (pokemon.height >= .7 && pokemon.height < 1) {
    
   }

    else if (pokemon.height == max){
    
    }

   else if (pokemon.height >= 1) {
    
    }

  });
});