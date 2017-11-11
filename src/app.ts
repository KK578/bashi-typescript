import * as dotenv from 'dotenv';
import { DotenvResult } from 'dotenv';
import * as SlackConnectionManager from './slack-connection-manager';

///////////////////////////////////////////////////////////
// Environment variable checks
class App {
    slackConnectionManager : ISlackConnectionManager
    slackConnectionListeners : [ISlackConnectionListeners]

    constructor() {
        // C Style exit code.
        this.checkEnvironmentLoaded();
        this.startSlackManager();
        this.subscribeSlackListeners();
    }

    private checkEnvironmentLoaded() : object {
        const envLoaded:DotenvResult = dotenv.config();

        if (envLoaded.error) {
            const error = envLoaded.error;

            switch (error.code) {
                case 'ENOENT':
                    console.error('No .env file was found.');
                    process.exit(2);
                    break;

                default:
                    console.error(error.message);
                    process.exit(1);
                    break;
            }

            return { error };
        }

        return {};
    }

    private startConnectionManager() {
        this.slackConnectionManager = new SlackConnectionManager();
        this.slackConnectionManager.start();
    }
}

// Conversation
// require('./src/conversation');
// Respond to train requests.
// require('./src/train-time-notifier');
