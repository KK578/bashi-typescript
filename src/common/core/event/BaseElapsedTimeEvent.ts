import { ITimeEvent } from "../../interface/";
import { BaseEvent } from "./";

export abstract class BaseElapsedTimeEvent extends BaseEvent implements ITimeEvent {
    public abstract timeTrigger: Date;
    public abstract callback(): void;

    public setCallback(): NodeJS.Timer {
        const timeToCallback : number = this.timeTrigger.getTime();

        return setTimeout(this.callback, timeToCallback);
    }
}
