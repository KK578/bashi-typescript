import { App } from "../app";
import { RtmConnectionManager, SlackConnectionManager, SlackDataManager, WebApiManager } from "../bashi";

import { BaseRtmClient, SlackRtmClient } from "../bashi";

import { IRtmConnectionManager, ISlackConnectionManager } from "../interfaces";

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
