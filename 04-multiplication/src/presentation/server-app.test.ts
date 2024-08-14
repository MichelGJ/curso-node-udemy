import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
import { ServerApp } from "./server-app";

describe('test server-app.ts', () => {

    const runOptions = {
        base: 5,
        limit: 5,
        show: true,
        fileName: 'custom-name',
        fileDestination:'custom-destination',
    }

    beforeEach(()=>{
       jest.clearAllMocks();
    })

    test('should create ServerApp instance', async() => {

        const serverApp = new ServerApp();
        
        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function');      
    });

    // test('should run ServerApp with options', async() => {

    //     const logSPy = jest.spyOn(console,'log');

    //     ServerApp.run(runOptions);
        
    // });

    test('should run ServerApp with custom values mocked', async() => {

        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createMock = jest.fn().mockReturnValue('1 x 2 = 2');
        const saveFileMock  = jest.fn().mockReturnValue(false);

        console.log = logMock;
        console.error = logErrorMock;
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveFileMock;
        ServerApp.run(runOptions);
        
        expect(logMock).toHaveBeenCalledWith("Server runing...");
        expect(createMock).toHaveBeenCalledWith( {"base": 5, "limit": 5});
        expect(saveFileMock).toHaveBeenCalledWith(  {"fileContent": '1 x 2 = 2', "fileDestination": "custom-destination", "fileName": "custom-name"});
        // expect(logMock).toHaveBeenCalledWith('File Created')
        expect(logErrorMock).not.toHaveBeenCalledWith();
        
    });


})
