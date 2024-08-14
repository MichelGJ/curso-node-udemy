import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.respository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email-service";


const LogRepository = new LogRepositoryImpl(
    // new FileSystemDataSource()
    new MongoLogDatasource()
);
const emailService = new EmailService();

export class Server {

    public static start() {

        console.log('Server started...');

        new SendEmailLogs(emailService,LogRepository).execute('micheljraiche@gmail.com');

        // emailService.sendEmailWithFileSystemLogs(['micheljraiche@gmail.com']);
        // emailService.sendEmail({
        //     to:'michelmdkjraiche@gmail.com',
        //     subject:'Logs de sistema',
        //     htmlBody:`
        //     <h3>Logs de sistema - NOC</h3>
        //     <p>Lorem ipsum</p>
        //     <p>Ver logs adjuntos</p>
        //     `
        // })

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'https://google.com'
                new CheckService(
                    LogRepository,
                    () => console.log(`${url} is ok`),
                    (error) => console.log(error),
                ).execute(url);
                // new CheckService().execute('http://localhost:3000');
            }
        );
    }

}