import { BaseEvent } from "./";
import { ITimeEvent } from "../../interface/";

export abstract class BaseElapsedTimeEvent extends BaseEvent implements ITimeEvent {
    abstract timeTrigger: Date;
    abstract callback(): void;

    setCallback(): NodeJS.Timer {
        const timeToCallback : number = this.timeTrigger.getTime();

        return setTimeout(this.callback, timeToCallback);
    }
}
