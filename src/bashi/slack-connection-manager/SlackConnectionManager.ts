import { ISlackConnectionManager } from "../interfaces/slack-connection-manager/ISlackConnectionManager";

export class SlackConnectionManager implements ISlackConnectionManager {
    public start(): void {
        console.log("Starting");
    }

    public subscribeToRtm(eventName: string, callback: (error: Error, data: {}) => void): void {
        console.log(eventName);
    }
}
