import { IEvent, IEventHandler, IEventManager } from "../../interface/";

export abstract class BaseEventManager implements IEventManager {
    public eventHandlers: IEventHandler[];

    protected constructor() {
        this.eventHandlers = [];
    }

    public onEvent(event: IEvent): void {
        this.eventHandlers.forEach((handler) => {
            const promise: Promise<boolean> = handler.canHandleEvent.call(handler, event);

            return promise.then((result) => {
                if (result) {
                    return handler.handleEvent.call(handler, event);
                }

                return Promise.resolve();
            });
        });
    }
}
