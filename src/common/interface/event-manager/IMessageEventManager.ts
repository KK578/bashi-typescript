import { IEventManager, IMessageEvent, IMessageEventHandler } from "../";

export interface IMessageEventManager extends IEventManager {
    eventHandlers: [IMessageEventHandler];
    onEvent(event: IMessageEvent): void;
}
