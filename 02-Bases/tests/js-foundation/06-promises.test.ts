import { getPokemonById } from "../../src/js-foundation/06-promises";

describe('js-foundation/06-promises.ts',()=>{
    const getUUID = () => '1234';
    const getAge = () => 35;
    test('getPokemonById should return a pokemon', async ()=>{

        // 1. Arrange
        const pokemonId = 1;
    
        // 2. Act
        const pokemonName = await getPokemonById(pokemonId);

        // 3. Assert
        expect(pokemonName).toBe('bulbasaur');

    });
    test('getPokemonById should return an error if pokemon does not exist', async ()=>{

        // 1. Arrange
        const pokemonId = 10000000000;

        try {
            // 2. Act
            const pokemonName = await getPokemonById(pokemonId);
            expect(true).toBeFalsy();
        } catch (error) {
            expect(error).toBe(`Pokemon not found with ${pokemonId}`)
        }
        
        // 3. Assert
        
    });
});
