import { IMessage, IMessageEvent, IMessageEventManager, IMessageReceiver } from "../../interface/";

export abstract class BaseMessageReceiver implements IMessageReceiver {
    protected managers: [IMessageEventManager];

    public abstract connect(): Promise<boolean>;
    public abstract disconnect(): Promise<boolean>;

    /**
     * Converts an IMessage to IMessageEvent.
     */
    public abstract messageToEvent(message: IMessage): IMessageEvent;

    protected onMessage(message: IMessage) {
        this.managers.forEach((manager) => manager.onEvent(this.messageToEvent(message)));
    }

    public subscribeToMessages(eventManager: IMessageEventManager): void {
        this.managers.push(eventManager);
    }
}
