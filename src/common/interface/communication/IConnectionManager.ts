import { IConnection, IMessageReceiver, IMessageSender } from "../";

// TODO: Rename to MessageManager?
/**
 * Base Interface for classes that manage a connection to an external application.
 * These interfaces drive the communications of Bashi and binds it to that specific
 *   communication.
 */
export interface IConnectionManager extends IConnection {
    /**
     * Subscribe a new MessageReceiver to the ConnectionManager.
     */
    subscribeReceiver(receiver: IMessageReceiver): void;

    /**
     * Unsubscribe a MessageReceiver from the ConnectionManager.
     */
    unsubscribeReceiver(receiver: IMessageReceiver): void;

    /**
     * Subscribe a new MessageSender to the ConnectionManager.
     */
    subscribeSender(sender: IMessageSender): void;

    /**
     * Unsubscribe a MessageReceiver from the ConnectionManager.
     */
    unsubscribeSender(sender: IMessageSender): void;
}
