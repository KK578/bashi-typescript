import * as dotenv from "dotenv";
// import * as SlackConnectionManager from "./slack-connection-manager";

///////////////////////////////////////////////////////////
// Environment variable checks
class App {
    // slackConnectionManager : ISlackConnectionManager
    // slackConnectionListeners : [ISlackConnectionListeners]

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

const app = new App();
app.start();
// Conversation
// require("./src/conversation");
// Respond to train requests.
// require("./src/train-time-notifier");
