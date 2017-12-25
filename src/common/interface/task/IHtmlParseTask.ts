import { ITask } from "./";

export interface IHtmlParseTask extends ITask {
    invoke(html: string): Promise<any>;
}
