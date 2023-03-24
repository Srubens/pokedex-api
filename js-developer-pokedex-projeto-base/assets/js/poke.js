const pokeApi = {}

function convertPokeApiToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.id = pokeDetail.id 
    pokemon.number = pokeDetail.order 
    pokemon.name = pokeDetail.name 

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type
    
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) =>{
    return fetch(pokemon.url)
                .then((response) => response.json())
                .then(convertPokeApiToPokemon)
}

pokeApi.getPokemons = (offset = 0,limit = 10) =>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    const fetcher = fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((dataResults) => Promise.all(dataResults))
        .then((pokemonDetails) => pokemonDetails )
        .catch((e)=> console.log('error: ', e))
    console.log('retorno do fetcher:', fetcher)
    return fetcher
}

console.log(pokeApi)