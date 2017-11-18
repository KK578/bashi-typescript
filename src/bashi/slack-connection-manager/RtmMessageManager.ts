import * as Slack from "@slack/client";
import { EventEmitter } from "events";
import { IRtmMessageManager } from "../../interfaces";

export class RtmMessageManager extends EventEmitter implements IRtmMessageManager {
    public onMessage(data: Slack.MessageEvent): void {
        switch (data.type) {
            case "message": return this.handleMessage(data);
            default: return;
        }
    }

    private handleMessage(data: Slack.MessageEvent): void {
        switch (data.subtype) {
            case "bot_message":
                this.emit("bot_message", data);
                break;

            case "message_deleted":
                this.emit("message_deleted", data);
                break;

            default:
                if (data.text) {
                    this.emit("message", data);
                }
                break;
        }
    }
}
