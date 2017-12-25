import { SlackMessageSender, TrainFormatMessageTask, TrainHtmlParseTask } from "../";
import { MessageTask, WebGetTask } from "../../common/core/";
import { IMessageEvent, IMessageEventHandler } from "../../common/interface/";

export class TrainMessageEventHandler implements IMessageEventHandler {
    private slackMessageSender: SlackMessageSender;

    constructor() {
        this.slackMessageSender = new SlackMessageSender(process.env.SLACK_BOT_TOKEN);
    }

    public canHandleEvent(event: IMessageEvent): Promise<boolean> {
        const message = event.message.text.toLowerCase();

        return Promise.resolve(/train/.test(message));
    }

    public async handleEvent(event: IMessageEvent): Promise<any> {
        const messageTask = new MessageTask(this.slackMessageSender);
        const webGetTask = new WebGetTask();
        const htmlParseTask = new TrainHtmlParseTask();
        const formatMessageTask = new TrainFormatMessageTask();
        const channel = event.message.channel;

        await messageTask.invoke(channel, "Did someone mention... _Trains_?");
        const html = await webGetTask.invoke(process.env.TRAIN_URL);
        const results = await htmlParseTask.invoke(html);
        const finalMessage = await formatMessageTask.invoke(results);
        await messageTask.invoke(channel, finalMessage);
    }
}
