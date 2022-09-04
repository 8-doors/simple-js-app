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
for (let i = 0; i < pokemonList.length; i++) {
    document.write('Dex Number: ', pokemonList[i].dexNum, ' Name: ', 
      pokemonList[i].name, ' Height: ',  pokemonList[i].height, ' ');
      if (pokemonList[i].height < .7) {
        document.write('Small.<br>')
    }
    if (pokemonList[i].height >= .7 && pokemonList[i].height < 1) {
        document.write('Medium.<br>')
    }
      if (pokemonList[i].height >= 1) {
        document.write('Large, Wow, thats big!<br>')
    }
}
