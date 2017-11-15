import { CLIENT_EVENTS, RtmClient } from "@slack/client";
import { IRtmConnectionManager } from "../../interfaces/slack-connection-manager/IRtmConnectionManager";
import * as Slack from "../../interfaces/node-slack-sdk";
import { BaseRtmClient } from "./BaseRtmClient";
import { ISlackDataManager } from "../../interfaces/slack-connection-manager/ISlackDataManager";

export class RtmConnectionManager implements IRtmConnectionManager {
    public slackDataManager: ISlackDataManager;

    private rtmClient: BaseRtmClient;

    public constructor(rtmClient: BaseRtmClient, slackDataManager: ISlackDataManager) {
        this.rtmClient = rtmClient;
        this.slackDataManager = slackDataManager;

        this.rtmClient.on(CLIENT_EVENTS.RTM.AUTHENTICATED, this.onAuthenticated.bind(this));
        this.rtmClient.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, this.onConnected.bind(this));
    }

    private onAuthenticated(data) {
        this.slackDataManager.setData(data);

        console.log(`${this.slackDataManager.bot.name}: Logged in!`);
    }

    private onConnected(data) {
        console.log(`${this.slackDataManager.bot.name}: Connected!`);
    }

    public start(): void {
        this.rtmClient.start();
    }

    public stop(): void {
        throw new Error("Method not implemented.");
    }
}
