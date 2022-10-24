let pokemonRepository = (function () {
  let pokemonList = [];
  let theUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

  function add(pokemon){
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
    ) {
      pokemonList.push(pokemon);
    }  else {
      console.log('error adding')
    }
  };

  function getAll(){
    return pokemonList;
  };

  function showDetials(pokemon){
    loadDetails(pokemon).then(function () {  
      console.log(pokemon)
    });
  };

  function addListItem(pokemon){
    let pokemon_list = document.querySelector('.pokemon-list');
    let createli = document.createElement('li');
    let createbut = document.createElement('button');

    getDex(pokemon);

    createbut.innerText = pokemon.name;

    createbut.addEventListener('click', function(event) {
      showDetials(pokemon);
    });    

    createli.appendChild(createbut);

    pokemon_list.appendChild(createli);

    createli.classList.add('pokemon')
  };

  function loadList() {
    return fetch (theUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function (item) {
        let pocket = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pocket);
        console.log(pocket)
      });
    }).catch(function (e) {
      console.error(e);
    })
  };


  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function(e) {
      console.error(e);
    });
  };

  function getDex(pokemon) {
    let dexUrl = pokemon.detailsUrl;
    return fetch (dexUrl).then(function(response) {
      return response.json();
    }).then(function (dex) {
      if(dex.game_indices[3].game_index > 100) {
        pokemon.dexNum = '#' + dex.game_indices[3].game_index;
      }
      else if(dex.game_indices[3].game_index <= 99 && 
        dex.game_indices[3].game_index > 9) {
        pokemon.dexNum = '#0' + dex.game_indices[3].game_index
      }
      else if(dex.game_indices[3].game_index <= 9) {
        pokemon.dexNum = '#00' + dex.game_indices[3].game_index
      }
    })
  };

  //function useDex(pokemon) {
    //
  //}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetials,
    loadList: loadList,
    loadDetails: loadDetails,
    getDex: getDex,
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