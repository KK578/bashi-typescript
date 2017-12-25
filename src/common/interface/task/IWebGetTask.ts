import { ITask } from "./";

export interface IWebGetTask extends ITask {
    url: string;

    invoke(): Promise<string>;
}
