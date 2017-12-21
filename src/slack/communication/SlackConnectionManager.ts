import { SlackMessageReceiver, SlackMessageSender } from "../";
import { BaseConnectionManager } from "../../common/core/";

export class SlackConnectionManager extends BaseConnectionManager {
    constructor(slackToken: string) {
        super();

        this.subscribeReceiver(new SlackMessageReceiver(slackToken));
        this.subscribeSender(new SlackMessageSender(slackToken));
    }
}
