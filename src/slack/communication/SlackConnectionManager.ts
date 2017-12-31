import { SlackMessageReceiver, SlackMessageSender } from "../";
import { BaseConnectionManager } from "../../common/core/";
import { IMessageReceiver, IMessageSender } from "../../common/interface/index";

export class SlackConnectionManager extends BaseConnectionManager {
    constructor(messageReceiver: IMessageReceiver, messageSender: IMessageSender) {
        super();

        this.subscribeReceiver(messageReceiver);
        this.subscribeSender(messageSender);
    }
}
