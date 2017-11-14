import { ISlackConnectionManager } from "./interfaces/slack-connection-manager/ISlackConnectionManager";

export class App {
    private scm: ISlackConnectionManager;
    // slackConnectionListeners : [ISlackConnectionListeners]

    public constructor(scm: ISlackConnectionManager) {
        // TODO
        this.scm = scm;
    }

    public start() {
        this.startSlackManager();
        this.subscribeSlackListeners();
    }

    private startSlackManager(): void {
        this.scm.start();
    }

    private subscribeSlackListeners(): void {
        // throw new Error("Method not implemented.");
    }
}

// Conversation
// require("./src/conversation");
// Respond to train requests.
// require("./src/train-time-notifier");
