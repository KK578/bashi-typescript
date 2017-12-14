import { IEvent, IEventHandler } from "../";

/**
 * Base interface for the top level listeners to events.
 *
 * The EventManager should be the only item that subscribes onto
 *  classes that fire the events.
 * The EventManager will then distribute the raised event to EventHandlers
 *  that implement logic to handle the event.
 */
export interface IEventManager {
    eventHandlers: [IEventHandler];

    onEvent(event: IEvent): void;
}
