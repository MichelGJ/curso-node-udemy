import winston, {format} from 'winston';
import {DateTime} from 'luxon'

const {combine, timestamp, json} = format;

const timezoned = () => {
  try {
    return DateTime.now().setZone("America/Caracas").toISO() ?? 'ERROR';
  } catch (error) {
    console.error('Error formatting timestamp:', error);
    return 'Error'; // Or handle the error as needed
  }
};

export const logger = winston.createLogger({
    level: 'info',
    format: combine(
      timestamp({format:timezoned}),
      json()
    ),
    // defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });

  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));

  export const buildLogger = (service:string) => {
    return {
        log: (message:string) => {
            logger.log('info', {message, service});
        },
        error: (message:string) => {
          logger.error('error', {message, service});
      }
    }
  }
