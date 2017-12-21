import { IConnection, IMessage, IMessageEvent, IMessageEventManager } from "../../";

export interface IMessageReceiver extends IConnection {
    /**
     * Subscribe to message events.
     */
    subscribe(eventManager: IMessageEventManager): void;

    /**
     * Unsubscribe from message events.
     */
    unsubscribe(eventManager: IMessageEventManager): void;
}
