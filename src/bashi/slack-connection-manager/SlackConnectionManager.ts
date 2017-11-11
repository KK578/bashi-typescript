import { IRtmConnectionManager } from "../../interfaces/slack-connection-manager/IRtmConnectionManager";
import { ISlackConnectionManager } from "../../interfaces/slack-connection-manager/ISlackConnectionManager";

export class SlackConnectionManager implements ISlackConnectionManager {
    private rtm: IRtmConnectionManager;

    constructor(botToken: string, rtm: IRtmConnectionManager) {
        this.rtm = rtm;
    }

    public start(): void {
        console.log("Starting");
        this.rtm.start();
    }

    public subscribeToRtm(eventName: string, callback: (error: Error, data: {}) => void): void {
        console.log(eventName);
    }
}
