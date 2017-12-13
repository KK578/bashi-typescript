import { BaseEvent } from "./";
import { ITimeEvent } from "../../interface/";

export abstract class BaseFixedTimeEvent extends BaseEvent implements ITimeEvent {
    abstract timeTrigger: Date;
    abstract callback(): void;

    setCallback(): NodeJS.Timer {
        // TODO: Resolve a level of accuracy we need for the timeout.
        const timeToCallback : number = this.timeTrigger.getTime() - this.time.getTime();

        return setTimeout(this.callback, timeToCallback);
    }
}
