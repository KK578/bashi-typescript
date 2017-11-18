import { App } from "../app";

import { BaseRtmClient, BaseWebClient, RtmMessageManager, SlackRtmClient, SlackWebClient } from "../bashi";
import { RtmConnectionManager, SlackConnectionManager, SlackDataManager, WebClientManager } from "../bashi";
import { InstantMessageListener, TrainDataCrawler, TrainListener } from "../bashi";

import { IRtmConnectionManager, IRtmListener, ISlackConnectionManager } from "../interfaces";

export class BashiFactory {
    private botToken: string;
    private trainUrl: string;

    constructor(botToken: string, trainUrl: string) {
        this.botToken = botToken;
        this.trainUrl = trainUrl;
    }

    public createApp(): App {
        const slackConnectionManager = this.createSlackConnectionManager();
        const rtmListeners = this.createRtmListeners(slackConnectionManager);

        return new App(slackConnectionManager, rtmListeners);
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

    public createRtmListeners(slackConnectionManager: ISlackConnectionManager): IRtmListener[] {
        return [
            this.createInstantMessageMessager(slackConnectionManager),
            this.createTrainListener(slackConnectionManager)
        ];
    }

    public createInstantMessageMessager(slackConnectionManager: ISlackConnectionManager) {
        return new InstantMessageListener(slackConnectionManager);
    }

    public createTrainListener(slackConnectionManager: ISlackConnectionManager) {
        const trainDataCrawler = this.createTrainDataCrawler();

        return new TrainListener(this.trainUrl, slackConnectionManager, trainDataCrawler);
    }

    public createTrainDataCrawler() {
        return new TrainDataCrawler();
    }
}
