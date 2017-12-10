import { RtmClient } from "@slack/client";
import { BaseRtmClient } from "../";

export class SlackRtmClient extends BaseRtmClient {
    protected rtmClient: RtmClient;

    constructor(botToken: string) {
        const rtmClient = new RtmClient(botToken);
        super(rtmClient);

        this.rtmClient = rtmClient;
    }
}
