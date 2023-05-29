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
      showMod(pokemon.dexNum + ' ' + pokemon.name, pokemon.height, pokemon.weight, pokemon.name, pokemon.imageUrl);
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

    createbut.classList.add('btn');

    createbut.classList.add('btn-info');

    createbut.setAttribute('data-toggle', 'modal');

    createbut.setAttribute('data-target', '#modal-container');

    pokemon_list.appendChild(createli);

    createli.classList.add('pokemon');

    createli.classList.add('list-group-item');
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
      item.height = Number(Math.round((details.height * 3.94)+'e2')+'e-2');
      item.types = details.types;
      item.weight = Number(Math.round((details.weight * .220462)+'e2')+'e-2');
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

 function showMod(title, height, text, bulba, img) {

  let modalTitle = document.querySelector('.modal-title');
  let profileImg = document.querySelector('.proimg');
  let profileText = document.querySelector('.modal-body-text');
  let bulbapedia = document.querySelector('#bLink');

  modalTitle.innerText = title;

  profileImg.src = img;

  profileText.innerText = 'Height: ' + height + '\"' + '\n\n' + 'Weight: ' + text + ' ' + 'lbs.';

  bulbapedia.href = 'https://bulbapedia.bulbagarden.net/wiki/' + bulba + '_(Pokémon)';

 }

  function hideMod () {
    let modalBox = document.querySelector('#modal-container')
    modalBox.classList.remove('is-visible')
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetials,
    loadList: loadList,
    loadDetails: loadDetails,
    getDex: getDex,
    showMod: showMod,
    hideMod: hideMod,
  }; 
})();

pokemonRepository.loadList().then(function() {

  pokemonRepository.getAll().forEach(function(pokemon) {
  
    pokemonRepository.addListItem(pokemon)

  });
});
