/**
 * Base interface for classes which represent some event in Bashi.
 *
 * Derived interfaces should denote all data that is needed to start the processing of the event
 *  and produce a useful result at the end.
 */
export interface IEvent {
    /**
     * Time at which the event was raised.
     */
    time: Date;
}
