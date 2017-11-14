import { IRtmClient } from "../../interfaces/slack-connection-manager/IRtmClient";
import * as Slack from "@slack/client";
import { EventEmitter } from "events";

let rtm: Slack.RtmClient;

export class BaseRtmClient extends EventEmitter {
    protected rtm: IRtmClient;

    constructor(rtm: IRtmClient) {
        super();

        this.rtm = rtm;
    }

    start() {
        rtm.start();
    }
}
