import axios from 'axios';

interface Pokemon {
    id: string
    url: string
    name: string
    image: string
    abilities?: Ability[];
    types?: Type[]
}

type Ability = {
    name: string;
    url: string;
}

type Type = {
    name: string;
    url: string;
}

interface PokeapiInterface{
    abilities: {
        ability:{
            name: string
            url: string
        }
    }[]

    id: string
    name: string
    sprites: {
        front_default: string
    }

    types:{
        type: {
            name: string
            url: string
        }
    }[]
}

const api = axios.create({baseURL: 'https://pokeapi.co/api/v2'})

const getPokemon = async(url: string) => {
    const response = await axios.get(url)

    const data: PokeapiInterface = response.data
    const abilities = data.abilities.map(ability => ({
        name:ability.ability.name,
        url: ability.ability.url
    }))

    const types = data.types.map(types => ({
        name:types.type.name,
        url: types.type.url
    }))

    const pokemon = {
        abilities,
        types,
        name: data.name,
        id: data.id,
        image: data.sprites.front_default,
    } as Pokemon
    
    return pokemon;
}

export const getPokemons = async (offset, limit) => {
    const response = await api.get(`/pokemon?limit=${limit}&offset=${offset}`)
       
    const data: {results: Pokemon[]} = await response.data

    const pokemons = data.results.map(async (pokemon) => {
        const fetchedPokemon = await getPokemon(pokemon.url)

        return fetchedPokemon
    })
    
    const result = await Promise.all(pokemons)
    
    return result
}


