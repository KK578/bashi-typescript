import { IEventHandler } from "./";

export interface IElapsedTimeEventHandler extends IEventHandler {
    timeToEvent: Date;
}
