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

  function loadList(){

  };

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showdetails: showDetials
  }; 
})();

let max = pokemonRepository.getAll()[0].height

pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.height > max) {
    max = pokemon.height
  }
});


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
