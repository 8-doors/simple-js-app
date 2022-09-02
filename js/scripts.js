let pokemonList = [
    {dexNum: '#001', name: 'Bulbasaur', height: '0.7 m', types:['Grass', 'Poison'] },
    {dexNum: '#002', name: 'Ivysaur', height: '1.0 m', types:['Grass', 'Poison'] },
    {dexNum: '#003', name: 'Venusaur', height: '2.0 m', types:['Grass', 'Poison'] },
    {dexNum: '#004', name: 'Charmander', height: '0.6 m', types:['Fire'] },
    {dexNum: '#005', name: 'Charmeleon', height: '1.1 m', types:['Fire'] },
    {dexNum: '#006', name: 'Charizard', height: '1.7 m', types:['Fire', 'Flying'] },
    {dexNum: '#007', name: 'Squirtle', height: '0.5 m', types:['Water'] },
    {dexNum: '#008', name: 'Wartortle', height: '1.0 m', types:['Water'] },
    {dexNum: '#009', name: 'Blastoise', height: '1.6 m', types:['Water'] },
]

for (let i = 0; i < pokemonList.length; i++) {
    document.writeln('Dex Number: ', pokemonList[i].dexNum, ' Name: ', 
      pokemonList[i].name, ' Height: ',  pokemonList[i].height, '.')
}
