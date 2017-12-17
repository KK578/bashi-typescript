import { IEvent, IMessage } from "../";

/**
 * Base interface for events that are raised due to a received message.
 */
export interface IMessageEvent extends IEvent {
    message: IMessage;
}
