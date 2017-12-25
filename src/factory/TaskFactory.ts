import { MessageTask, WebGetTask } from "../common/core/";
import { IFormatMessageTask, IHtmlParseTask, IMessageSender,
    IMessageTask, ITaskFactory, IWebGetTask } from "../common/interface/";
import { ITrainData, TrainFormatMessageTask, TrainHtmlParseTask } from "../slack/index";

export class TaskFactory implements ITaskFactory {
    private messageSender: IMessageSender;

    constructor(messageSender: IMessageSender) {
        this.messageSender = messageSender;
    }

    public createMessageTask(channel: string, text: string): IMessageTask {
        return new MessageTask(this.messageSender, channel, text);
    }

    public createWebGetTask(url: string): IWebGetTask {
        return new WebGetTask(url);
    }

    public createTrainHtmlParseTask(html: string): IHtmlParseTask {
        return new TrainHtmlParseTask(html);
    }

    public createTrainFormatMessageTask(data: ITrainData[]): IFormatMessageTask {
        return new TrainFormatMessageTask(data);
    }
}
