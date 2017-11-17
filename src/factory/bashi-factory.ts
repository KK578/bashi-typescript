import { App } from "../app";
import { RtmConnectionManager, SlackConnectionManager, SlackDataManager, WebClientManager } from "../bashi";

import { BaseRtmClient, BaseWebClient, RtmMessageManager, SlackRtmClient, SlackWebClient } from "../bashi";

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
        const webClientManager = this.createWebClientManager();

        return new SlackConnectionManager(rtmConnectionManager, webClientManager);
    }

    public createRtmConnectionManager(): IRtmConnectionManager {
        const rtmClient = this.createRtmClient();
        const slackDataManager = this.createSlackDataManager();
        const rtmMessageManager = this.createRtmMessageManager();

        return new RtmConnectionManager(rtmClient, slackDataManager, rtmMessageManager);
    }

    public createRtmClient(): BaseRtmClient {
        return new SlackRtmClient(this.botToken);
    }

    public createSlackDataManager() {
        return new SlackDataManager();
    }

    public createRtmMessageManager() {
        return new RtmMessageManager();
    }

    public createWebClientManager() {
        const webClient = this.createWebClient();

        return new WebClientManager(webClient);
    }

    public createWebClient(): BaseWebClient {
        return new SlackWebClient(this.botToken);
    }
}
