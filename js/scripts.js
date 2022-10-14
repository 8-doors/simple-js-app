let pokemonRepository = (function () {
  let pokemonList = [];

  function add(pokemon){
    pokemonList.push(pokemon);
  };

  function getAll(){
    return pokemonList;
  };

  function showDetials(pokemon){
    loadDetails(pokemon).then(function(pokemon) {  
      console.log(pokemon)
    });
  };

  function addListItem(pokemon){
    let pokemon_list = document.querySelector('.pokemon-list');
    let createli = document.createElement('li');
    let createbut = document.createElement('button');

    getDex(pokemon);

    useDex(pokemon);

    createbut.innerText = pokemon.dexNum + ' ' + pokemon.name;

    createbut.addEventListener('click', function(pokemon) {
      showDetials(pokemon);
    });    

    createli.appendChild(createbut);

    pokemon_list.appendChild(createli);

    createli.classList.add('pokemon')
  };

  function loadList() {
    return fetch ('https://pokeapi.co/api/v2/pokemon/?limit=151').then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          deatsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  };


  function loadDetails(pokemon) {
    return fetch(pokemon.deatsUrl).then(function(response) {
      return response.json();
    }).then(function(details) {
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = details.types
    }).catch(function(e) {
      console.error(e);
    });
  };

  function getDex(pokemon) {
    return fetch (pokemon.deatsUrl).then(function(response) {
      return response.json;
    })
  };

  function useDex(pokemon) {
    if(pokemon.id >= 100) {
      pokemon.dexNum = '#' + pokemon.id;
    }
    else if(pokemon.id <= 99) {
      pokemon.dexNum = '#0' + pokemon.id
    }
    else if(pokemon.id <= 9) {
      pokemon.dexNum = '#00' + pokemon.id
    }
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetials,
    loadList: loadList,
    loadDetails: loadDetails,
    getDex: getDex,
    useDex: useDex,
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

   // if (pokemon.height < .7) {
    
    //}

   // else if (pokemon.height >= .7 && pokemon.height < 1) {
    
   //}

    //else if (pokemon.height == max){
    
    //}

   //else if (pokemon.height >= 1) {
    
    //}

  });
});