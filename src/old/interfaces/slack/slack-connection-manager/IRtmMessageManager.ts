import * as Slack from "@slack/client";

export interface IRtmMessageManager {
    onMessage(rtmData: Slack.MessageEvent): void;

    on(event, listener);
}
