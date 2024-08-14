// import { yarg } from "./args.plugin";

const runCommand = async (args: string[]) => {
    process.argv = [...process.argv, ...args];
    const { yarg } = await import('./args.plugin');
    return yarg
}

describe('test args.plugin.ts', () => {

    const originalArgv = process.argv;

    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules();
    })


    test('should return default values', async () => {

        const argv = await runCommand(['-b', '5']);
        expect(argv).toEqual(expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: 'multiplication-table',
            d: 'outputs',
        }))

    });

    test('should return custom values', async () => {

        const argv = await runCommand(['-b', '8', '-l', '20', '-s', 'true', '-n', 'custom-name', '-d', 'custom-directory']);
        expect(argv).toEqual(expect.objectContaining({
            b: 8,
            l: 20,
            s: true,
            n: 'custom-name',
            d: 'custom-directory',
        }))

    });

})
