import { IRtmConnectionManager, ISlackConnectionManager, IWebClientManager } from "../../interfaces";

export class SlackConnectionManager implements ISlackConnectionManager {
    private rtmConnectionManager: IRtmConnectionManager;
    private webClientManager: IWebClientManager;

    constructor(rtmConnectionManager: IRtmConnectionManager, webClientManager: IWebClientManager) {
        this.rtmConnectionManager = rtmConnectionManager;
        this.webClientManager = webClientManager;
    }

    // Getters
    public getSlackDataManager() {
        return this.rtmConnectionManager.slackDataManager;
    }

    // RtmConnectionManager
    public start(): void {
        console.log("Starting");
        this.rtmConnectionManager.start();
    }

    public subscribeToRtm(eventName: string, callback): void {
        this.rtmConnectionManager.subscribeToRtm(eventName, callback);
    }

    // WebClientManager
    public sendMessage(message, callback) {
        this.webClientManager.sendMessage(message, callback);
    }
}
