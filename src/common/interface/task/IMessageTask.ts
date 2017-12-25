import { ITask } from "./";

export interface IMessageTask extends ITask {
    channel: string;
    text: string;

    invoke(): Promise<void>;
}
