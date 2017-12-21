import { IEvent } from "./";

/**
 * Base interface for all events that are triggered due to time.
 */
export interface ITimeEvent extends IEvent {
    /**
     * Time when event will be triggered.
     */
    eventTime: Date;

    /**
     * Decides whether eventTime describes the absolute time the event fires,
     *   or the time to elapse before firing the event.
     */
    isAbsoluteTime: boolean;

    /**
     * Sets callback up to be called at the correct time.
     */
    setCallback(): NodeJS.Timer;

    /**
     * Callback to raise when timeout occurs.
     */
    callback(): void;
}
