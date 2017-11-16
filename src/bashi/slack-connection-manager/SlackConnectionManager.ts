import { IRtmConnectionManager, ISlackConnectionManager, IWebApiManager } from "../../interfaces";

export class SlackConnectionManager implements ISlackConnectionManager {
    private rtmConnectionManager: IRtmConnectionManager;
    private webApiManager: IWebApiManager;

    constructor(rtmConnectionManager: IRtmConnectionManager, webApiManager: IWebApiManager) {
        this.rtmConnectionManager = rtmConnectionManager;
        this.webApiManager = webApiManager;
    }

    public start(): void {
        console.log("Starting");
        this.rtmConnectionManager.start();
    }

    public subscribeToRtm(eventName: string, callback: (error: Error, data: {}) => void): void {
        console.log(eventName);
    }
}
