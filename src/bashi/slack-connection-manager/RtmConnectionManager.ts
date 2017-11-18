import { CLIENT_EVENTS, MessageEvent } from "@slack/client";
import { BaseRtmClient } from "../";
import { IRtmConnectionManager, IRtmMessageManager, ISlackDataManager } from "../../interfaces";

export class RtmConnectionManager implements IRtmConnectionManager {
    public slackDataManager: ISlackDataManager;

    private rtmClient: BaseRtmClient;
    private rtmMessageManager: IRtmMessageManager;

    public constructor(rtmClient: BaseRtmClient,
                       slackDataManager: ISlackDataManager,
                       rtmMessageManager: IRtmMessageManager) {
        this.rtmClient = rtmClient;
        this.slackDataManager = slackDataManager;
        this.rtmMessageManager = rtmMessageManager;

        this.rtmClient.on(CLIENT_EVENTS.RTM.AUTHENTICATED,
                          this.slackDataManager.setData.bind(this.slackDataManager));
        this.rtmClient.on(CLIENT_EVENTS.RTM.AUTHENTICATED,
                          this.onAuthenticated.bind(this));

        this.rtmClient.on(CLIENT_EVENTS.RTM.UNABLE_TO_RTM_START,
                          this.onFail.bind(this));

        this.rtmClient.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED,
                          this.onConnected.bind(this));

        this.rtmClient.on(CLIENT_EVENTS.RTM.RAW_MESSAGE,
                          (data) => this.onMessage(data, this.rtmMessageManager));
    }

    private onAuthenticated(data) {
        console.log(`${this.slackDataManager.bot.name}: Logged in!`);
    }

    private onFail(data) {
        console.log("Failed to log in.");
    }

    private onConnected(data) {
        console.log(`${this.slackDataManager.bot.name}: Connected!`);
    }

    private onMessage(data: string, messageManager: IRtmMessageManager) {
        const rtmData = JSON.parse(data) as MessageEvent;

        messageManager.onMessage.call(messageManager, rtmData);
    }

    public start(): void {
        this.rtmClient.start();
    }

    public stop(): void {
        throw new Error("Method not implemented.");
    }

    public subscribeToRtm(event, callback) {
        this.rtmMessageManager.on(event, callback);
    }
}
