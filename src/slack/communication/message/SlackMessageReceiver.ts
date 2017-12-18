import { SlackMessageEvent } from "../../";
import { BaseMessageReceiver } from "../../../common/core/";
import { IMessage, IMessageEvent, IMessageEventManager } from "../../../common/interface/";

import { CLIENT_EVENTS, RtmClient, RtmStartResult, RtmConnectResult } from "@slack/client";

export class SlackMessageReceiver extends BaseMessageReceiver {
    private rtmClient: RtmClient;
    protected managers: IMessageEventManager[];

    constructor(slackToken: string) {
        super();

        this.rtmClient = new RtmClient(slackToken);
        this.rtmClient.on(CLIENT_EVENTS.RTM.AUTHENTICATED, this.onAuthenticated.bind(this));
        this.rtmClient.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, this.onConnected.bind(this));
        this.rtmClient.on(CLIENT_EVENTS.RTM.RAW_MESSAGE, this.onMessage.bind(this));
    }

    // IConnection
    public connect(): Promise<boolean> {
        this.rtmClient.start();

        return Promise.resolve(true);
    }

    public disconnect(): Promise<boolean> {
        this.rtmClient.disconnect();

        return Promise.resolve(true);
    }

    // IMessageReceiver
    public messageToEvent(message: any): IMessageEvent {
        return new SlackMessageEvent(message);
    }

    // Private
    private onAuthenticated(data: RtmStartResult) {
        console.log("Bashi logged in.");
    }

    private onConnected(data: RtmConnectResult) {
        console.log("Bashi connected.");
    }
}
