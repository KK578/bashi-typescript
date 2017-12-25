import { ITask } from "./";

export interface IFormatMessageTask extends ITask {
    data: any;

    invoke(): Promise<string>;
}
