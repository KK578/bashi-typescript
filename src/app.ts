import { ISlackConnectionManager } from "./interfaces/slack-connection-manager/ISlackConnectionManager";

export class App {
    private slackConnectionManager: ISlackConnectionManager;
    // slackConnectionListeners : [ISlackConnectionListeners]

    public constructor(slackConnectionManager: ISlackConnectionManager) {
        // TODO
        this.slackConnectionManager = slackConnectionManager;
    }

    public start() {
        this.startSlackManager();
        this.subscribeSlackListeners();
    }

    private startSlackManager(): void {
        this.slackConnectionManager.start();
    }

    private subscribeSlackListeners(): void {
        // throw new Error("Method not implemented.");
    }
}

// Conversation
// require("./src/conversation");
// Respond to train requests.
// require("./src/train-time-notifier");
