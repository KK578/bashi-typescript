import { IMessage, IMessageEvent } from "../../common/interface/";

export class SlackMessageEvent implements IMessageEvent {
    public message: IMessage;
    public time: Date;

    constructor(message: IMessage) {
        this.message = message;
        this.time = new Date(Date.now());
    }
}
