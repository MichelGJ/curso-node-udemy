import { emailTemplate } from "../../src/js-foundation/01-template"

describe('js-foundation/01-template.ts',()=>{
    test('emailTemplate should contain a greeting', ()=>{

        // 1. Arrange
        

        // 2. Act
        

        // 3. Assert
        expect(emailTemplate).toContain('Hi, ');
    })

    test('emailTemplate should contain {{name}} and {{orderId}}', ()=>{

        // 1. Arrange
        

        // 2. Act
        

        // 3. Assert
        expect(emailTemplate).toMatch(/{{name}}/);
        expect(emailTemplate).toMatch(/{{orderId}}/);
    })
});
