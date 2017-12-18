import { SlackMessageReceiver, SlackMessageSender } from "../";
import { BaseConnectionManager } from "../../common/core/";

export class SlackConnectionManager extends BaseConnectionManager {
    constructor(slackToken: string) {
        super();

        this.receivers.push(new SlackMessageReceiver(slackToken));
        this.senders.push(new SlackMessageSender(slackToken));
    }
}
