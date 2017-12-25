import { IMessage, IMessageSender, IMessageTask } from "../../interface/";

export class MessageTask implements IMessageTask {
    private messageSender: IMessageSender;
    public channel: string;
    public text: string;

    constructor(messageSender: IMessageSender, channel: string, text: string) {
        this.messageSender = messageSender;
        this.channel = channel;
        this.text = text;
    }

    public invoke(): Promise<any> {
        // TODO: Move to a factory perhaps?
        const message: IMessage = {
            channel: this.channel,
            text: this.text,
            user: "Bashi"
        };

        return this.messageSender.sendMessage(message);
    }
}
