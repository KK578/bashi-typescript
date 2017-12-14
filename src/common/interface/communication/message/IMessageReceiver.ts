import { IConnection, IMessage, IMessageEvent, IMessageEventManager } from "../../";

export interface IMessageReceiver extends IConnection {
    /**
     * Subscribe to message events.
     */
    subscribeToMessages(eventManager: IMessageEventManager): void;
}
