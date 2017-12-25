import { ITask } from "./";

export interface IWebGetTask extends ITask {
    invoke(url: string): Promise<any>;
}
