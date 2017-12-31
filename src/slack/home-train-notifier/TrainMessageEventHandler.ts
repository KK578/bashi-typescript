import { SlackMessageSender, TrainFormatMessageTask, TrainHtmlParseTask } from "../";
import { MessageTask, WebGetTask } from "../../common/core/";
import { IMessageEvent, IMessageEventHandler, ITaskFactory } from "../../common/interface/";
import { TaskFactory } from "../../factory/TaskFactory";

export class TrainMessageEventHandler implements IMessageEventHandler {
    private url: string;
    private taskFactory: ITaskFactory;

    constructor(url: string, taskFactory: ITaskFactory) {
        this.url = url;
        this.taskFactory = taskFactory;
    }

    public canHandleEvent(event: IMessageEvent): Promise<boolean> {
        const message = event.message.text.toLowerCase();

        return Promise.resolve(/train/.test(message));
    }

    public async handleEvent(event: IMessageEvent): Promise<any> {
        const factory = this.taskFactory;
        const channel = event.message.channel;

        await factory.createMessageTask(channel, "Did someone mention... _Trains_?").invoke();
        const html = await factory.createWebGetTask(this.url).invoke();
        const results = await factory.createTrainHtmlParseTask(html).invoke();
        const finalMessage = await factory.createTrainFormatMessageTask(results).invoke();
        await factory.createMessageTask(channel, finalMessage).invoke();
    }
}
