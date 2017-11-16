import { IRtmConnectionManager } from "../../interfaces/slack-connection-manager/IRtmConnectionManager";
import { ISlackConnectionManager } from "../../interfaces/slack-connection-manager/ISlackConnectionManager";
import { IWebApiManager } from "../../interfaces/slack-connection-manager/IWebApiManager";

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
