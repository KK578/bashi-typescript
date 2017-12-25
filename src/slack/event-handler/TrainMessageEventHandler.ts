import { IMessageEvent, IMessageEventHandler } from "../../common/interface/";
import { SlackMessageSender } from "../index";

export class TrainMessageEventHandler implements IMessageEventHandler {
    private slackMessageSender: SlackMessageSender;

    constructor() {
        this.slackMessageSender = new SlackMessageSender(process.env.SLACK_BOT_TOKEN);
    }

    public canHandleEvent(event: IMessageEvent): Promise<boolean> {
        const message = event.message.text.toLowerCase();

        return Promise.resolve(/train/.test(message));
    }

    public handleEvent(event: IMessageEvent): Promise<any> {
        return this.slackMessageSender.sendMessage({
            channel: event.message.channel,
            text: "Did someone mention... _Trains_?",
            user: ""
        });
    }
}
