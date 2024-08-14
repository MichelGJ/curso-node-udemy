import { characters } from "../../src/js-foundation/02-destructuring";

describe('js-foundation/02-desctructuring.ts',()=>{
    test('character should contain Flash, Superman', ()=>{

        // 1. Arrange
        

        // 2. Act
        

        // 3. Assert
        expect(characters).toContain('Flash');
        expect(characters).toContain('Superman');
    })

    test('first character should be Flash and second Superman ', ()=>{

        // 1. Arrange
        const[flash,superman] = characters;

        // 2. Act
        

        // 3. Assert
        expect(flash).toBe('Flash');
        expect(superman).toBe('Superman');
    })
});
