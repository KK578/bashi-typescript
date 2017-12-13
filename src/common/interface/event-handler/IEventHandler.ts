export interface IEventHandler {
    canHandleEvent(event): Promise<boolean>;
    handleEvent(event): Promise<any>;
}
