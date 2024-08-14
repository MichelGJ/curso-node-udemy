import exp from "constants";
import { buildLogger, logger as winstonLogger } from "../../src/plugins/logger-plugin";
import { lookup } from "dns";

describe('plugins/logger-plugin.ts', () => {
    test('buildLogger should return a function logger', async () => {

        // 1. Arrange
        
        // 2. Act
        const logger = buildLogger('test');

        // 3. Assert
        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');

    });

    test('logger.log should log a message', async () => {

        // 1. Arrange
        const winstonLoggerMock = jest.spyOn(winstonLogger,'log');
        const winstonErrorLoggerMock = jest.spyOn(winstonLogger,'error');
        const message = 'test message';
        const service = 'test service';
        // 2. Act
        const logger = buildLogger(service);
        logger.log(message);
        logger.error(message);

        // 3. Assert
        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'info',
            expect.objectContaining({
                level:'info',
                message,
                service,
            })
        );
        expect(winstonErrorLoggerMock).toHaveBeenCalledWith(
            'error',
            expect.objectContaining({
                message,
                service,
            })
        );
    });

});