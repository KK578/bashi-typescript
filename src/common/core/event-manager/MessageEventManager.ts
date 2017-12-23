import { BaseEventManager } from "./BaseEventManager";

import { IMessageEvent, IMessageEventManager } from "../../interface/";

export class MessageEventManager extends BaseEventManager implements IMessageEventManager {
    public onEvent(event: IMessageEvent) {
        if (event.message.text) {
            super.onEvent(event);
        }
    }
}
