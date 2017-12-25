import { IMessage, IMessageSender, IMessageTask } from "../../interface/";

export class MessageTask implements IMessageTask {
    private messageSender: IMessageSender;

    constructor(messageSender: IMessageSender) {
        this.messageSender = messageSender;
    }

    public invoke(channel: string, text: string): Promise<any> {
        // TODO: Move to a factory perhaps?
        const message: IMessage = {
            channel,
            text,
            user: "Bashi"
        };

        return this.messageSender.sendMessage(message);
    }
}
