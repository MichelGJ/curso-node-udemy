import { Request, Response } from 'express';
import { GitHubService, DiscordService } from '../services';



export class GithubController {


  constructor(
    private readonly githubService = new GitHubService(),
    private readonly discordService = new DiscordService(),
  ) { }


  webhookHandler = (req: Request, res: Response) => {

    const payload = req.body;
    const githubEvent = req.header('x-github-event') ?? 'unknown';
    let message: string;

    switch (githubEvent) {

      case 'star':
        message = this.githubService.onStar(payload);
        break;

      case 'issues':
        message = this.githubService.onIssue(payload);
        break;


      default:
        message = `Unknown event ${githubEvent}`;

    }
    console.log(message);

    // this.discordService.notify(message)
    //   .then( () => res.status(202).send('Accepted') )
    //   .catch( () => res.status(500).json({ error: 'internal server error'}) )

  }



}

