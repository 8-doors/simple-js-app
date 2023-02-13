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
    let modalBox = document.querySelector('#modal-container');
    modalBox.classList.add('is-visible');
    modalBox.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');
    let closeButElement = document.createElement('button');
    closeButElement.classList.add('modal-close');
    closeButElement.innerText = 'Close';
    closeButElement.addEventListener('click', hideMod);
    let titleElement = document.createElement('h1');
    titleElement.innerText = title;
    let contentElement = document.createElement('p');
    contentElement.innerText = 'Height: ' + height + '\"' + '\n\n' + 'Weight: ' + text + ' ' + 'lbs.';
    let linkElement = document.createElement('a');
    linkElement.classList.add('bulbaLink')
    linkElement.href = 'https://bulbapedia.bulbagarden.net/wiki/' + bulba + '_(Pokémon)';
    linkElement.target = '_blank';
    let linkImgElement = document.createElement('img');
    linkImgElement.classList.add('bulbaLink');
    linkImgElement.src = 'img/bulba.png';
    linkImgElement.alt = 'Bulbapedia Logo';
    let imgElement = document.createElement('img');
    imgElement.classList.add('proimg');
    imgElement.src = img;
    imgElement.alt = 'Pokemon Profile Image';
    linkElement.appendChild(linkImgElement);
    modal.appendChild(closeButElement);
    modal.appendChild(titleElement);
    modal.appendChild(imgElement);
    modal.appendChild(contentElement);
    modal.appendChild(linkElement);
    modalBox.appendChild(modal);
    modalBox.classList.add('is-visible');
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

window.addEventListener('keydown', (e) => {
  let modalBox = document.querySelector('#modal-container');
  if (e.key === 'Escape' && modalBox.classList.remove('is-visible')) {
    hideMod();
  }
})

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
