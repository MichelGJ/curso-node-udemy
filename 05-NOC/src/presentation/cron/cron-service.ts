import { CronJob } from "cron";

type CronTIme = string | Date;
type OnTick = ()=> void;

export class CronService {

    static createJob(cronTime:CronTIme, onTick:OnTick):CronJob{
        const job = new CronJob(
            cronTime, // cronTime
            onTick,
            null, // onComplete
            true, // start
            'America/Caracas' // timeZone
        );
        return job;
    }

}