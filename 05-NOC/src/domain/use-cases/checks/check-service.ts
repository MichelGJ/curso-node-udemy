import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repositories/log.repository";

interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;


export class CheckService implements CheckServiceUseCase {

    constructor(
        private readonly logRepository: LogRepository,
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback,
    ) { }


    public async execute(url: string): Promise<boolean> {

        try {
            const req = await fetch(url);
            if (!req.ok) {
                throw new Error(`Error on check service ${url}`);
            }
            const options = ({message:`Service ${url} working`, level:LogSeverityLevel.low, createdAt:new Date(),origin:'check-service.ts'})
            const log = new LogEntity(options);
            this.logRepository.saveLog(log);
            this.successCallback();
            return true;
        } catch (error) {
            const errorMessage = `${error}`;
            const options = ({message:errorMessage, level:LogSeverityLevel.high, createdAt:new Date(),origin:'check-service.ts'})
            const log = new LogEntity(options);
            this.logRepository.saveLog(log);
            this.errorCallback(errorMessage);
            return false;
        }
    }

}