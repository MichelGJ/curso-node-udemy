import { getAge } from "../../src/plugins";

describe('plugins/get-age-plugin.ts', () => {
    test('getAge should return the age of a person', () => {

        // 1. Arrange
        const birthdate = '1994-12-08'

        // 2. Act
        const age = getAge(birthdate);

        // 3. Assert
        expect(typeof age).toBe('number');

    });

    test('getAge should return current age', () => {

        // 1. Arrange
        const birthdate = '1994-12-08'

        // 2. Act
        const age = getAge(birthdate);
        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();


        // 3. Assert
        expect(age).toBe(calculatedAge);


    });

    test('getAge should return 0 years', () => {

        // 1. Arrange
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
        const birthdate = '1994-12-08'

        // 2. Act
        const age = getAge(birthdate);
        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();


        // 3. Assert
        expect(age).toBe(calculatedAge);

    });
});
