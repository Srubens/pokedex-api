(()=>{

    const pokemonList = document.getElementById('pokemonList')
    const loadPokemon = document.querySelector('.btn-more')
    const pokemonAll = document.getElementsByClassName('pokemon')


    let offset = 0
    const limit = 5
    const maxRecords = 11

// function convertPokemonToHtml(pokemon){
//     console.log('detalhe pokemon: ', pokemon)
//     return `
//         <li class="pokemon ${pokemon.type}">
//             <span class="number">${pokemon.id}</span>
//             <span class="name">${pokemon.name}</span>

//             <div class="detail">
//                 <ol class="types">
//                     ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
//                 </ol>

//                 <img src="${pokemon.photo}"
//                     alt="${pokemon.name}">
//             </div>
//         </li>
//     `
// }

    function loadPokemonItems(offset,limit){
        pokeApi.getPokemons(offset,limit).then((pokemons = []) =>{
            const newHtml = pokemons.map((pokemon) =>{
                return `
                    <li class="pokemon ${pokemon.type}">
                        <span class="number">${pokemon.id}</span>
                        <span class="name">${pokemon.name}</span>

                        <div class="detail">
                            <ol class="types">
                                ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                            </ol>

                            <img src="${pokemon.photo}"
                                alt="${pokemon.name}">
                        </div>
                    </li>
                `
            }).join('')
            pokemonList.innerHTML += newHtml
            
            showPokemon()
            return newHtml
        })
    }

    function showPokemon(){
        const pokemonsListAll = document.querySelectorAll('.pokemon')
        pokeApi.getPokemons(offset,limit).then((pokemons = []) =>{
            pokemons = pokemonsListAll
            pokemons.forEach((val)=>{
                val.addEventListener('click', ()=>{
                    let tag = val.innerHTML
                    Swal.fire({
                        html:`${tag}`,
                        width:'700px'
                    })
                })
            })
        })
    }

    

    loadPokemon.addEventListener('click', () => {
        offset += limit
        const qtdRecord = offset + limit
        console.log(qtdRecord)
        if( qtdRecord >= maxRecords ){
            const newLimit = qtdRecord - maxRecords
            loadPokemonItems(offset,limit)
            loadPokemon.disabled = true
            return
        }else{
            loadPokemonItems(offset,limit)
        }
    })

    loadPokemonItems(offset,limit)
})()