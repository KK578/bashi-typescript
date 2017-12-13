import { IEvent } from "./";

/**
 * Base interface for events that are raised due to a received message.
 */
export interface IMessageEvent extends IEvent {
    channel: string;
    text: string;
    user: string;
}
