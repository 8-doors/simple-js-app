let pokemonRepository=function(){let e=[];function t(t){"object"==typeof t&&"name"in t&&"detailsUrl"in t?e.push(t):console.log("error adding")}function n(){return e}function i(e){o(e).then(function(){r(e.dexNum+" "+e.name,e.height,e.weight,e.name,e.imageUrl)})}function o(e){return fetch(e.detailsUrl).then(function(e){return e.json()}).then(function(t){e.imageUrl=t.sprites.front_default,e.height=Number(Math.round(3.94*t.height+"e2")+"e-2"),e.types=t.types,e.weight=Number(Math.round(.220462*t.weight+"e2")+"e-2")}).catch(function(e){console.error(e)})}function a(e){return fetch(e.detailsUrl).then(function(e){return e.json()}).then(function(t){t.game_indices[3].game_index>100?e.dexNum="#"+t.game_indices[3].game_index:t.game_indices[3].game_index<=99&&t.game_indices[3].game_index>9?e.dexNum="#0"+t.game_indices[3].game_index:t.game_indices[3].game_index<=9&&(e.dexNum="#00"+t.game_indices[3].game_index)})}function r(e,t,n,i,o){let a=document.querySelector(".modal-title"),r=document.querySelector(".proimg"),d=document.querySelector(".modal-body-text"),l=document.querySelector("#bLink");a.innerText=e,r.src=o,d.innerText="Height: "+t+'"\n\nWeight: '+n+" lbs.",l.href="https://bulbapedia.bulbagarden.net/wiki/"+i+"_(Pok\xe9mon)"}return{add:t,getAll:n,addListItem:function e(t){let n=document.querySelector(".pokemon-list"),o=document.createElement("li"),r=document.createElement("button");a(t),r.innerText=t.name,r.addEventListener("click",function(e){i(t)}),o.appendChild(r),r.classList.add("btn"),r.classList.add("btn-info"),r.setAttribute("data-toggle","modal"),r.setAttribute("data-target","#modal-container"),n.appendChild(o),o.classList.add("pokemon"),o.classList.add("list-group-item")},showDetails:i,loadList:function e(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=151").then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){let n={name:e.name,detailsUrl:e.url};t(n),console.log(n)})}).catch(function(e){console.error(e)})},loadDetails:o,getDex:a,showMod:r,hideMod:function e(){document.querySelector("#modal-container").classList.remove("is-visible")}}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(e){pokemonRepository.addListItem(e)})});