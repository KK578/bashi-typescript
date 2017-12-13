import { IEvent } from "./";

/**
 * Base interface for all events that are triggered due to time.
 */
export interface ITimeEvent extends IEvent {
    /**
     * Time when event will be triggered.
     */
    timeTrigger: Date;

    /**
     * Sets callback up to be called at the correct time.
     */
    setCallback(): NodeJS.Timer;

    /**
     * Callback to raise when 
     */
    callback(): void;
}
