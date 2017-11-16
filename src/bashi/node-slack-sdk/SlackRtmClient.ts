import { RtmClient } from "@slack/client";
import { BaseRtmClient } from "./BaseRtmClient";

export class SlackRtmClient extends BaseRtmClient {
    protected rtm: RtmClient;

    constructor(botToken: string) {
        const rtm = new RtmClient(botToken);
        super(rtm);

        this.rtm = rtm;
    }
}
