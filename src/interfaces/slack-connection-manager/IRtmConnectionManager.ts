import { ISlackDataManager } from "../";

export interface IRtmConnectionManager {
    slackDataManager: ISlackDataManager;

    start(): void;
    stop(): void;
}
