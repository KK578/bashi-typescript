import { IEvent } from "../../interface/";

export abstract class BaseEvent implements IEvent {
    public time: Date;

    protected constructor() {
        this.time = new Date(Date.now());
    }
}
