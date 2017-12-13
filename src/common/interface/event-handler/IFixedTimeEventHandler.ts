import { IEventHandler } from "./";

export interface IFixedTimeEventHandler extends IEventHandler {
    eventTime: Date;
}
