import { ISlackDataManager } from "../../";

export interface ISlackConnectionManager {
    start(): void;
    subscribeToRtm(eventName: string, callback: (error: Error, data: {}) => void): void;

    sendMessage(message, callback?);

    getSlackDataManager(): ISlackDataManager;
}
