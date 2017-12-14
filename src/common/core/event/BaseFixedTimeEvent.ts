import { ITimeEvent } from "../../interface/";
import { BaseEvent } from "./";

export abstract class BaseFixedTimeEvent extends BaseEvent implements ITimeEvent {
    public abstract timeTrigger: Date;
    public abstract callback(): void;

    public setCallback(): NodeJS.Timer {
        // TODO: Resolve a level of accuracy we need for the timeout.
        const timeToCallback : number = this.timeTrigger.getTime() - this.time.getTime();

        return setTimeout(this.callback, timeToCallback);
    }
}
