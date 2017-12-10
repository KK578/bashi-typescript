import { EventEmitter } from "events";
import { IRtmClient } from "../../interfaces";

export class BaseRtmClient extends EventEmitter {
    protected rtmClient: IRtmClient;

    constructor(rtmClient: IRtmClient) {
        super();

        this.rtmClient = rtmClient;
    }

    public on(eventName: string, callback: (...args: any[]) => void): this {
        this.rtmClient.on(eventName, callback);

        return this;
    }

    public start() {
        this.rtmClient.start();
    }
}
