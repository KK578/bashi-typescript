import { BaseMessageReceiver } from "../../../common/core/";
import { IMessageEvent, IMessage, IMessageEventManager } from "../../../common/interface/";

import { CLIENT_EVENTS, RtmClient } from "@slack/client";

export class SlackMessageEvent implements IMessageEvent {
    message: IMessage;
    time: Date;

    constructor(message: IMessage) {
        this.message = message;
        this.time = new Date(Date.now());
    }
}

export class SlackMessageReceiver extends BaseMessageReceiver {
    private rtmClient: RtmClient;
    protected managers: IMessageEventManager[];

    constructor(slackToken: string) {
        super();

        this.rtmClient = new RtmClient(slackToken);
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
}
