import { IEvent, IEventHandler, IEventManager } from "../../interface/";

export abstract class BaseEventManager implements IEventManager {
    public eventHandlers: IEventHandler[];

    protected constructor() {
        this.eventHandlers = [];
    }

    public onEvent(event: IEvent): void {
        this.eventHandlers.filter((handler) => handler.canHandleEvent.call(handler, event))
                          // TODO: Consider changing to map and then handling the promises.
                          .forEach((handler) => handler.handleEvent.call(handler, event));
    }
}
