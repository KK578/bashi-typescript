import { CLIENT_EVENTS, RtmClient } from "@slack/client";
import { IRtmConnectionManager } from "../../interfaces/slack-connection-manager/IRtmConnectionManager";
import * as Slack from "../../interfaces/node-slack-sdk";
import { BaseRtmClient } from "./BaseRtmClient";

export class RtmConnectionManager implements IRtmConnectionManager {
    public bot: Slack.IBotUser;
    public users: [Slack.IUser];
    public groups: [Slack.IGroup];
    public channels: [Slack.IChannel];
    public instantMessages: [Slack.IInstantMessage];

    private rtm: BaseRtmClient;

    public constructor(rtm: BaseRtmClient) {
        this.rtm = rtm;

        this.rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, this.onAuthenticated.bind(this));
        this.rtm.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, this.onConnected.bind(this));
    }

    private onAuthenticated(data) {
        this.bot = data.self;
        this.users = data.users;
        this.groups = data.groups;
        this.channels = data.channels;
        this.instantMessages = data.ims;

        console.log(`${this.bot.name}: Logged in!`);
    }

    private onConnected(data) {
        console.log(`${this.bot.name}: Connected!`);
    }

    public start(): void {
        this.rtm.start();
    }

    public stop(): void {
        throw new Error("Method not implemented.");
    }
}
