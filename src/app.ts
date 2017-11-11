import * as dotenv from "dotenv";
// import * as SlackConnectionManager from "./slack-connection-manager";
import { ISlackConnectionManager } from "./interfaces/slack-connection-manager/ISlackConnectionManager";

export class App {
    // slackConnectionManager : ISlackConnectionManager
    // slackConnectionListeners : [ISlackConnectionListeners]

    public constructor(scm: ISlackConnectionManager) {
        // TODO
        scm.start();
    }

    public start() {
        this.ensureEnvironmentLoaded();
        this.startSlackManager();
        this.subscribeSlackListeners();
    }

    private ensureEnvironmentLoaded(): void {
        const envLoaded: dotenv.DotenvResult = dotenv.config();
        const error: Error = envLoaded.error;

        if (error !== undefined) {
            console.error(error.message);
            process.exit(1);
        }
    }

    private startSlackManager(): void {
        // this.slackConnectionManager = new SlackConnectionManager();
        // this.slackConnectionManager.start();
        throw new Error("Method not implemented.");
    }

    private subscribeSlackListeners(): void {
        throw new Error("Method not implemented.");
    }
}

// Conversation
// require("./src/conversation");
// Respond to train requests.
// require("./src/train-time-notifier");
