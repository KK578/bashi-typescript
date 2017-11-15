import * as Slack from "../../interfaces/node-slack-sdk";
import { ISlackDataManager } from "./ISlackDataManager";

export interface IRtmConnectionManager {
    slackDataManager: ISlackDataManager;

    start(): void;
    stop(): void;
}
