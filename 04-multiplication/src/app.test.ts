// process.argv = ['node', 'app.ts', '-b', '10'];
// import './app';
import { ServerApp } from './presentation/server-app';
describe('Test app.ts', () => {
    test('should call ServerApp.run wit values', async () => {
        const serverRunMock = jest.fn();
        ServerApp.run = serverRunMock;
        process.argv = ['node', 'app.ts', '-b', '8', '-l', '20', '-s', 'true', '-n', 'custom-name', '-d', 'custom-destination'];

        await import('./app')
        expect(serverRunMock).toHaveBeenCalledWith({
            base: 8,
            limit: 20,
            show: true,
            fileName: 'custom-name',
            fileDestination: 'custom-destination',
        });

    })
})