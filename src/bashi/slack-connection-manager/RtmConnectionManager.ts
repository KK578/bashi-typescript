import { CLIENT_EVENTS, RtmClient } from "@slack/client";
import { IRtmConnectionManager } from "../../interfaces/slack-connection-manager/IRtmConnectionManager";

let rtm: RtmClient;

export class RtmConnectionManager implements IRtmConnectionManager {
    public bot: { name: string; };
    public users: {};
    public groups: {};
    public channels: {};
    public instantMessages: {};

    public constructor(token: string) {
        rtm = new RtmClient(token);

        rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, this.onAuthenticated.bind(this));
        rtm.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, this.onConnected.bind(this));
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
        rtm.start();
    }

    public stop(): void {
        throw new Error("Method not implemented.");
    }
}
