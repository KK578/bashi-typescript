import { TrainMessageEventHandler } from "../";
import { MessageEventManager } from "../../common/core/";
import { IMessageEvent, IMessageEventHandler, IMessageEventManager } from "../../common/interface/";

export class SlackMessageEventManager extends MessageEventManager {
    constructor() {
        super();

        this.eventHandlers.push(new TrainMessageEventHandler());
    }

    public onEvent(event: IMessageEvent) {
        const user = event.message.user;

        if (user && user.toLowerCase() !== "bashi") {
            super.onEvent(event);
        }
    }
}
