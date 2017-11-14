import { App } from "../app";
import { SlackConnectionManager } from "../bashi/slack-connection-manager/SlackConnectionManager";
import { SlackRtmClient } from "../bashi/slack-connection-manager/SlackRtmClient";
import { RtmConnectionManager } from "../bashi/slack-connection-manager/RtmConnectionManager";

import { BaseRtmClient } from "../bashi/slack-connection-manager/BaseRtmClient";
import { ISlackConnectionManager } from "../interfaces/slack-connection-manager/ISlackConnectionManager";
import { IRtmConnectionManager } from "../interfaces/slack-connection-manager/IRtmConnectionManager";

export class BashiFactory {
    private botToken: string;

    constructor(botToken: string) {
        this.botToken = botToken;
    }

    public createApp(): App {
        const scm = this.createSlackConnectionManager();

        return new App(scm);
    }

    public createSlackConnectionManager(): ISlackConnectionManager {
        const rtm = this.createRtmConnectionManager();

        return new SlackConnectionManager(rtm);
    }

    public createRtmConnectionManager(): IRtmConnectionManager {
        const rtmClient = this.createRtmClient();

        return new RtmConnectionManager(rtmClient);
    }

    public createRtmClient(): BaseRtmClient {
        return new SlackRtmClient(this.botToken);
    }
}
