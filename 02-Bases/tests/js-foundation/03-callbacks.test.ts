import { getUserById } from "../../src/js-foundation/03-callbacks";
describe('js-foundation/03-callbacks.ts',()=>{
    test('getUserById should return an error if user does not exist', ()=>{

        // 1. Arrange
        const id = 10;

        // 2. Act
        getUserById(id,(err, user)=>{

            // 3. Assert
            expect(err).toBe(`Usuario not found with id ${id}`)
            expect(user).toBeUndefined();

        });
    });
    test('getUserById should return an user if user exist', ()=>{

        // 1. Arrange
        const id = 1;

        // 2. Act
        getUserById(id,(err, user)=>{

            // 3. Assert
            expect(err).toBeUndefined
            expect(user).toEqual({
                id: 1,
                name:'John Doe',
            })
        });
    })  
});

