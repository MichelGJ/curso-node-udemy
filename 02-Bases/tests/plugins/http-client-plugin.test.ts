import { httpClientPlugin } from "../../src/plugins/http-client-plugin";

describe('plugins/http-client-plugin.ts', () => {
    test('httpClientPlugin.get() should return a string', async () => {

        // 1. Arrange
        
        // 2. Act
        const data = await httpClientPlugin.get('https://pokeapi.co/api/v2/pokemon/1');
        
        // 3. Assert
        expect ( data.name ).toEqual('bulbasaur');

    });
    test('httpClientPlugin should have POST, PUT and DELETE methods', async () => {
        // 1. Arrange
        
        // 2. Act

        // 3. Assert
        expect(typeof httpClientPlugin.post).toBe('function')  
        expect(typeof httpClientPlugin.put).toBe('function')  
        expect(typeof httpClientPlugin.delete).toBe('function')      
    });

});