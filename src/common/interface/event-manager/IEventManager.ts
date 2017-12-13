import { IEventHandler } from "../";

export interface IEventManager {
    eventHandlers: [IEventHandler];

    onEvent(event): void;
}
 