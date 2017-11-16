import { IRtmClient } from "../../interfaces/node-slack-sdk/IRtmClient";
import { EventEmitter } from "events";

export class BaseRtmClient extends EventEmitter {
    protected rtm: IRtmClient;

    constructor(rtm: IRtmClient) {
        super();

        this.rtm = rtm;
    }

    on(eventName: string, callback: (...args: any[]) => void): this {
        this.rtm.on(eventName, callback);

        return this;
    }

    start() {
        this.rtm.start();
    }
}
