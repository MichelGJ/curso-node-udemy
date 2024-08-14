import { getId } from "../../src/plugins";

describe('plugins/get-id-plugin.ts', () => {
    test('getId should return a UUID', () => {

        // 1. Arrange
        
        // 2. Act
        const uuid = getId();

        // 3. Assert
        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe(36);

    });

});
