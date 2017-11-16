import { App } from "../app";
import { RtmConnectionManager } from "../bashi/slack-connection-manager/RtmConnectionManager";
import { SlackConnectionManager } from "../bashi/slack-connection-manager/SlackConnectionManager";
import { SlackDataManager } from "../bashi/slack-connection-manager/SlackDataManager";
import { WebApiManager } from "../bashi/slack-connection-manager/WebApiManager";

import { BaseRtmClient } from "../bashi/node-slack-sdk/BaseRtmClient";
import { SlackRtmClient } from "../bashi/node-slack-sdk/SlackRtmClient";

import { IRtmConnectionManager } from "../interfaces/slack-connection-manager/IRtmConnectionManager";
import { ISlackConnectionManager } from "../interfaces/slack-connection-manager/ISlackConnectionManager";

export class BashiFactory {
    private botToken: string;

    constructor(botToken: string) {
        this.botToken = botToken;
    }

    public createApp(): App {
        const slackConnectionManager = this.createSlackConnectionManager();

        return new App(slackConnectionManager);
    }

    public createSlackConnectionManager(): ISlackConnectionManager {
        const rtmConnectionManager = this.createRtmConnectionManager();
        const webApiManager = this.createWebApiManager();

        return new SlackConnectionManager(rtmConnectionManager, webApiManager);
    }

    public createRtmConnectionManager(): IRtmConnectionManager {
        const rtmClient = this.createRtmClient();
        const slackDataManager = this.createSlackDataManager();

        return new RtmConnectionManager(rtmClient, slackDataManager);
    }

    public createRtmClient(): BaseRtmClient {
        return new SlackRtmClient(this.botToken);
    }

    public createSlackDataManager() {
        return new SlackDataManager();
    }

    public createWebApiManager() {
        return new WebApiManager(this.botToken);
    }
}
