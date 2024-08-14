import fs from "fs";
import { SaveFile } from "./save-file.use-case";

describe('test save-file.use-case.ts', () => {

    const customOptions = {
        fileContent: 'custom content',
        fileDestination: 'custom-outputs',
        fileName: 'custom-table-name',
    }

    const customfilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`

    afterEach(() => {
        if (fs.existsSync('outputs/table.txt')) fs.rmSync('outputs/table.txt', { recursive: true });
        if (fs.existsSync(customfilePath)) fs.rmSync(customfilePath, { recursive: true });
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })


    test('should save file with default values', () => {

        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';
        const options = {
            fileContent: 'test content'
        }

        const result = saveFile.execute(options);
        const fileExists = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

        expect(result).toBeTruthy;
        expect(fileExists).toBeTruthy;
        expect(fileContent).toBe(options.fileContent);

    });

    test('should save file with custom values', () => {

        const saveFile = new SaveFile();

        const result = saveFile.execute(customOptions);
        const fileExists = fs.existsSync(customfilePath);
        const fileContent = fs.readFileSync(customfilePath, { encoding: 'utf-8' });

        expect(result).toBeTruthy;
        expect(fileExists).toBeTruthy;
        expect(fileContent).toBe(customOptions.fileContent);
    });

    test('should return false if directory could not be created', () => {

        const saveFile = new SaveFile();
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => { throw new Error('error'); }
        );
        const result = saveFile.execute(customOptions);

        expect(result).toBeFalsy;

        mkdirSpy.mockRestore();
    });

    test('should return false if file could not be created', () => {

        const saveFile = new SaveFile();
        const mkdirSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
            () => { throw new Error('error'); }
        );
        const result = saveFile.execute(customOptions);

        expect(result).toBeFalsy;

        mkdirSpy.mockRestore();

    });
})
