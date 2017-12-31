import { TrainMessageEventHandler } from "../";
import { MessageEventManager } from "../../common/core/";
import { IMessageEvent, IMessageEventHandler, IMessageEventManager } from "../../common/interface/";

export class SlackMessageEventManager extends MessageEventManager {
    constructor(eventHandlers: IMessageEventHandler[]) {
        super();

        eventHandlers.forEach((handler) => this.eventHandlers.push(handler));
    }

    public onEvent(event: IMessageEvent) {
        const user = event.message.user;

        // TODO: Change detection based on login data.
        if (user && user.toLowerCase() !== "bashi") {
            super.onEvent(event);
        }
    }
}
