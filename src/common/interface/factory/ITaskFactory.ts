import { IFormatMessageTask, IHtmlParseTask, IMessageTask, IWebGetTask } from "../";
import { ITrainData } from "../../../slack/index";

export interface ITaskFactory {
    createMessageTask(channel: string, text: string): IMessageTask;
    createWebGetTask(url: string): IWebGetTask;

    // Slack/Train
    createTrainHtmlParseTask(html: string): IHtmlParseTask;
    createTrainFormatMessageTask(data: ITrainData[]): IFormatMessageTask;
}
