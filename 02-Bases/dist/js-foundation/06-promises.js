"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
const plugins_1 = require("../plugins");
const getPokemonById = async (id) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await plugins_1.httpClient.get(url);
        return pokemon.name;
    }
    catch (error) {
        throw `Pokemon not found with ${id}`;
    }
    // const resp = await fetch(url);
    // const pokemon = await resp.json();
    // throw new Error('Pokemon no existe');
    // return fetch(url)
    //     .then((response) =>response.json())
    //     // .then(()=> {throw new Error('Pokemon no existe')})
    //     .then((pokemon)=>pokemon.name)
};
exports.getPokemonById = getPokemonById;
