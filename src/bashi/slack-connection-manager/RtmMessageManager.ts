import * as Slack from "@slack/client";
import { IRtmMessageManager } from "../../interfaces";

export class RtmMessageManager implements IRtmMessageManager {
    public onMessage(rtmData: Slack.MessageEvent): void {
        console.log(rtmData.type);
    }
}
