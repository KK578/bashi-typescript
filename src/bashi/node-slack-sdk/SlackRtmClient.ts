import { RtmClient } from "@slack/client";
import { BaseRtmClient } from "./BaseRtmClient";

export class SlackRtmClient extends BaseRtmClient {
    protected rtmClient: RtmClient;

    constructor(botToken: string) {
        const rtmClient = new RtmClient(botToken);
        super(rtmClient);

        this.rtmClient = rtmClient;
    }
}
