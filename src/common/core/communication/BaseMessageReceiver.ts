import { IMessageEventManager, IMessageReceiver, IMessage, IMessageEvent } from "../../interface/";

export abstract class BaseMessageReceiver implements IMessageReceiver {
    protected managers: [IMessageEventManager];

    abstract connect(): Promise<boolean>;
    abstract disconnect(): Promise<boolean>;

    /**
     * Converts an IMessage to IMessageEvent.
     */
    abstract messageToEvent(message: IMessage): IMessageEvent;

    protected onMessage(message: IMessage) {
        this.managers.forEach((manager) => manager.onEvent(this.messageToEvent(message)));
    }

    public subscribeToMessages(eventManager: IMessageEventManager): void {
        this.managers.push(eventManager);
    }
}
