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
    {dexNum: '#010', name: 'Caterpie', height: '0.3',  types:['Bug'] },
    {dexNum: '#011', name: 'Metapod', height: '0.7', types:['Bug'] },
    {dexNum: '#012', name: 'Buterfree', height: '1.1', types:['Bug', 'Flying'] },
    {dexNum: '#013', name: 'Weedle', height: '0.3', types:['Bug', 'Poison'] },
    {dexNum: '#014', name: 'Kakuna', height: '0.6', types:['Bug', 'Poison'] },
    {dexNum: '#015', name: 'Beedrill', height: '1.0', types:['Bug', 'Poison'] },
    {dexNum: '#016', name: 'Pidgy', height: '0.3', types:['Normal', 'Flying'] },
    {dexNum: '#017', name: 'Pigeotto', height: '1.1', types:['Normal', 'Flying'] },
    {dexNum: '#018', name: 'Pigeot', height: '1.5', types:['Normal', 'Flying'] },
    {dexNum: '#019', name: 'Rattata', height: '0.3', types:['Normal'] },
    {dexNum: '#020', name: 'Raticate', height: '0.7', types:['Normal'] },
    {dexNum: '#021', name: 'Spearow', height: '0.3', types:['Normal', 'Flying'] },
    {dexNum: '#022', name: 'Fearow', height: '1.2', types:['Normal', 'Flying'] },
    {dexNum: '#023', name: 'Ekans', height: '2.0', types:['Poison'] },
    {dexNum: '#024', name: 'Arbok', height: '3.5', types:['Poison'] },
    {dexNum: '#025', name: 'Pikachu', height: '0.4', types:['Electric'] },
    {dexNum: '#026', name: 'Raichu', height: '0.8', types:['Electric'] },
    {dexNum: '#027', name: 'Sandshrew', height: '0.6', types:['Ground'] },
    {dexNum: '#028', name: 'Sandslash', height: '1.0', types:['Ground'] },
    {dexNum: '#029', name: 'Nidoran(F)', height: '0.4', types:['Poison'] },
    {dexNum: '#030', name: 'Nidorina', height: '0.8', types:['Poison'] },
    {dexNum: '#031', name: 'Nidoqueen', height: '1.3', types:['Poison', 'Ground'] },
    {dexNum: '#032', name: 'Nidoran(M)', height: '0.5', types:['Poison'] },
    {dexNum: '#033', name: 'Nidorino', height: '0.9', types:['Poison'] },
    {dexNum: '#034', name: 'Nidoking', height: '1.4', types:['Poison', 'Ground'] },
    {dexNum: '#035', name: 'Clefairy', height: '0.6', types:['Fairy'] },
    {dexNum: '#036', name: 'Clefable', height: '1.3', types:['Fairy'] },
    {dexNum: '#037', name: 'Vulpix', height: '0.6', types:['Fire'] },
    {dexNum: '#038', name: 'Ninetales', height: '1.1', types:['Fire'] },
    {dexNum: '#039', name: 'Jigglypuff', height: '0.5', types:['Normal', 'Fairy'] },
    {dexNum: '#040', name: 'Wigglytuff', height: '1.0', types:['Normal', 'Fairy'] },
    {dexNum: '#041', name: 'Zubat', height: '0.8', types:['Poison', 'Flying'] },
    {dexNum: '#042', name: 'Golbat', height: '1.6', types:['Poison', 'Flying'] },
    {dexNum: '#043', name: 'Oddish', height: '0.5', types:['Grass', 'Poison'] },
    {dexNum: '#044', name: 'Gloom', height: '0.8', types:['Grass', 'Poison'] },
    {dexNum: '#045', name: 'Vileplume', height: '1.2', types:['Grass', 'Poison'] },
    {dexNum: '#046', name: 'Paras', height: '0.3', types:['Bug','Grass'] },
    {dexNum: '#047', name: 'Parasect', height: '1.0', types:['Bug','Grass'] },
    {dexNum: '#048', name: 'Venonat', height: '1.0', types:['Bug', 'Poison'] },
    {dexNum: '#049', name: 'Venomoth', height: '1.5', types:['Bug', 'Poison'] },
    {dexNum: '#050', name: 'Diglett', height: '0.2', types:['Ground'] },
    {dexNum: '#051', name: 'Dugtrio', height: '0.7', types:['Ground'] },
    {dexNum: '#052', name: 'Meowth', height: '0.4', types:['Normal'] },
    {dexNum: '#053', name: 'Persian', height: '1.0', types:['Normal'] },
    {dexNum: '#054', name: 'Psyduck', height: '0.8', types:['Water'] },
    {dexNum: '#055', name: 'Golduck', height: '1.7', types:['Water'] },
    {dexNum: '#056', name: 'Mankey', height: '0.5', types:['Fighting'] },
    {dexNum: '#057', name: 'Primeape', height: '1.0', types:['Fighting'] },
    {dexNum: '#058', name: 'Growlithe', height: '0.7', types:['Fire'] },
    {dexNum: '#059', name: 'Arcanine', height: '1.9', types:['Fire'] },
    {dexNum: '#060', name: 'Poliwag', height: '0.6', types:['Water'] },
    {dexNum: '#061', name: 'Poliwhirl', height: '1.0', types:['Water'] },
    {dexNum: '#062', name: 'Poliwrath', height: '1.3', types:['Water', 'Fighting'] },
    {dexNum: '#063', name: 'Abra', height: '0.9', types:['Psychic'] },
    {dexNum: '#064', name: 'Kadabra', height: '1.3', types:['Psychic'] },
    {dexNum: '#065', name: 'Alakazam', height: '1.5', types:['Psychic'] },
    {dexNum: '#066', name: 'Machop', height: '0.8', types:['Fighting'] },
    {dexNum: '#067', name: 'Machoke', height: '1.5', types:['Fighting'] },
    {dexNum: '#068', name: 'Machamp', height: '1.6', types:['Fighting'] },
    {dexNum: '#069', name: 'Bellsprout', height: '0.7', types:['Grass', 'Poison'] },
    {dexNum: '#070', name: 'Weepinbell', height: '1.0', types:['Grass', 'Poison'] },
    {dexNum: '#071', name: 'Victreebell', height: '1.7', types:['Grass', 'Poison'] },
    {dexNum: '#072', name: 'Tentacool', height: '0.9', types:['Water'] },
    {dexNum: '#073', name: 'Tentacruel', height: '1.6', types:['Water', 'Poison'] },
    {dexNum: '#074', name: 'Geodude', height: '0.4', types:['Rock', 'Ground'] },
    {dexNum: '#075', name: 'Graveler', height: '1.0', types:['Rock', 'Ground'] },
    {dexNum: '#076', name: 'Golem', height: '1.4', types:['Rock', 'Ground'] },
    {dexNum: '#077', name: 'Ponyta', height: '1.0', types:['Fire'] },
    {dexNum: '#078', name: 'Rapidash', height: '1.7', types:['Fire'] },
    {dexNum: '#079', name: 'Slowpoke', height: '1.2', types:['Water', 'Psychic'] },
    {dexNum: '#080', name: 'Slowbro', height: '1.6', types:['Water', 'Psychic'] },
    {dexNum: '#081', name: 'Magnemite', height: '0.3', types:['Electric', 'Steel'] },
    {dexNum: '#082', name: 'Magneton', height: '1.0', types:['Electric', 'Steel'] },
    {dexNum: '#083', name: 'Farfetch\'d', height: '0.8', types:['Normal', 'Flying'] },
    {dexNum: '#084', name: 'Doduo', height: '1.4', types:['Normal', 'Flying'] },
    {dexNum: '#085', name: 'Dodrio', height: '1.8', types:['Normal', 'Flying'] },
    {dexNum: '#086', name: 'Seel', height: '1.1', types:['Water'] },
    {dexNum: '#087', name: 'Dewgong', height: '1.7', types:['Water', 'Ice'] },
    {dexNum: '#088', name: 'Grimer', height: '0.9', types:['Poison'] },
    {dexNum: '#089', name: 'Muk', height: '1.2', types:['Poison'] },
    {dexNum: '#090', name: 'Shelder', height: '0.3', types:['Water'] },
    {dexNum: '#091', name: 'Cloyster', height: '1.5', types:['Water', 'Ice'] },
    {dexNum: '#092', name: 'Gastly', height: '1.3', types:['Ghost', 'Poison'] },
    {dexNum: '#093', name: 'Haunter', height: '1.6', types:['Ghost', 'Poison'] },
    {dexNum: '#094', name: 'Gengar', height: '1.5', types:['Ghost', 'Poison'] },
    {dexNum: '#095', name: 'Onix', height: '8.8', types:['Rock', 'Ground'] },
    {dexNum: '#096', name: 'Drowzee', height: '1.0', types:['Psychic'] },
    {dexNum: '#097', name: 'Hypno', height: '1.6', types:['Psychic'] },
    {dexNum: '#098', name: 'Krabby', height: '0.4', types:['Water'] },
    {dexNum: '#099', name: 'Kingler', height: '1.3', types:['Water'] },
    {dexNum: '#100', name: 'Voltorb', height: '0.5', types:['Electric'] },
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
});
