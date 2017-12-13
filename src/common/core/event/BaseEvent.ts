import { IEvent } from "../../interface/";

export abstract class BaseEvent implements IEvent {
    time: Date = new Date();
}
