import { ITask } from "./";

export interface IMessageTask extends ITask {
    invoke(channel: string, text: string): Promise<any>;
}
