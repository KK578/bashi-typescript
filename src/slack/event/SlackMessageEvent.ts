import { BaseEvent } from "../../common/core/";
import { IMessage, IMessageEvent } from "../../common/interface/";

export class SlackMessageEvent extends BaseEvent implements IMessageEvent {
    public message: IMessage;

    constructor(message: IMessage) {
        super();

        this.message = message;
    }
}
