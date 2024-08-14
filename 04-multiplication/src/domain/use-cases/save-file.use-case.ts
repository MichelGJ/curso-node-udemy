import fs from 'fs';
export interface SaveFileUseCase {
    execute: (options: SaveFileUseOptions) => boolean;
}

export interface SaveFileUseOptions {
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
    constructor(
        /** repositoy: StorageRepository */
    ) { }

    execute({ fileContent, fileDestination = 'outputs', fileName = 'table' }: SaveFileUseOptions) {
        try {
            fs.mkdirSync(fileDestination, { recursive: true });
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
            return true;
        } catch (error) {
            return false;
        }


    }
}