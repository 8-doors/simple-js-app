let pokemonRepository = (function () {
let pokemonList = [
    {dexNum: '#001', name: 'Bulbasaur', height: '0.7', types:['Grass', 'Poison'] },
    {dexNum: '#002', name: 'Ivysaur', height: '1.0', types:['Grass', 'Poison'] },
    {dexNum: '#003', name: 'Venusaur', height: '2.0', types:['Grass', 'Poison'] },
    {dexNum: '#004', name: 'Charmander', height: '0.6', types:['Fire'] },
    {dexNum: '#005', name: 'Charmeleon', height: '1.1', types:['Fire'] },
    {dexNum: '#006', name: 'Charizard', height: '1.7', types:['Fire', 'Flying'] },
    {dexNum: '#007', name: 'Squirtle', height: '0.5', types:['Water'] },
    {dexNum: '#008', name: 'Wartortle', height: '1.0', types:['Water'] },
    {dexNum: '#009', name: 'Blastoise', height: '1.6',  types:['Water'] },
]
function add(pokemon){
pokemonList.push(pokemon);
};

function getAll(){
return pokemonList;
};

return {
  add: add,
  getAll: getAll
}; 
})();

let max = pokemonRepository.getAll()[0].height

pokemonRepository.getAll().forEach(function(pokemon) {
if (pokemon.height > max) {
max = pokemon.height
}
});

pokemonRepository.getAll().forEach(function(pokemon) {
  document.write('<p class="pokemon" id="', pokemon.dexNum, '">Dex Nember: ', pokemon.dexNum, ' Name: ', 
  pokemon.name, ' Height: ', pokemon.height, ' ');
  if (pokemon.height < .7) {
    document.write('Small.')
  }
  else if (pokemon.height >= .7 && pokemon.height < 1) {
    document.write('Medium.')
  }
  else if (pokemon.height == max){
  document.write ('Large, Wow, thats big!')
  }
  else if (pokemon.height >= 1) {
  document.write('Large.');
  }
  document.write('</p>')
  console.log(pokemon)
});