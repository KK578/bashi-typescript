import { IEvent } from "../../interface/";

export abstract class BaseEvent implements IEvent {
    public time: Date = new Date();
}
