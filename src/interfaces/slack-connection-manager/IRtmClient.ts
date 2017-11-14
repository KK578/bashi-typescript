import { EventEmitter } from "events";

export interface IRtmClient {
    on(eventName: string, callback: (...args: any[]) => void)
    start();
}
