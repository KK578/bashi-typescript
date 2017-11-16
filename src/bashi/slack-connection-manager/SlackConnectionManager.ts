import { IRtmConnectionManager, ISlackConnectionManager, IWebClientManager } from "../../interfaces";

export class SlackConnectionManager implements ISlackConnectionManager {
    private rtmConnectionManager: IRtmConnectionManager;
    private webClientManager: IWebClientManager;

    constructor(rtmConnectionManager: IRtmConnectionManager, webClientManager: IWebClientManager) {
        this.rtmConnectionManager = rtmConnectionManager;
        this.webClientManager = webClientManager;
    }

    public start(): void {
        console.log("Starting");
        this.rtmConnectionManager.start();
    }

    public subscribeToRtm(eventName: string, callback: (error: Error, data: {}) => void): void {
        console.log(eventName);
    }
}
