import { IRtmClient } from "../../interfaces/slack-connection-manager/IRtmClient";
import * as Slack from "@slack/client";
import { BaseRtmClient } from "./BaseRtmClient";

let rtm: Slack.RtmClient;

export class SlackRtmClient extends BaseRtmClient {
    protected rtm: Slack.RtmClient;

    constructor(botToken: string) {
        const rtm = new Slack.RtmClient(botToken);
        super(rtm);

        this.rtm = rtm;
    }
}