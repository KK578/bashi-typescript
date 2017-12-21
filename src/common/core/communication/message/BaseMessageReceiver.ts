import { IMessage, IMessageEvent, IMessageEventManager, IMessageReceiver } from "../../../interface/";

export abstract class BaseMessageReceiver implements IMessageReceiver {
    protected managers: IMessageEventManager[];

    protected constructor() {
        this.managers = [];
    }

    public abstract connect(): Promise<boolean>;
    public abstract disconnect(): Promise<boolean>;

    /**
     * Converts an IMessage to IMessageEvent.
     */
    public abstract messageToEvent(message: IMessage): IMessageEvent;

    protected onMessage(message: IMessage) {
        this.managers.forEach((manager) => manager.onEvent(this.messageToEvent(message)));
    }

    public subscribe(eventManager: IMessageEventManager): void {
        // TODO: This behaviour is reused in multiple places, would be good to synchronise.
        const index = this.managers.indexOf(eventManager);

        if (index >= 0) {
            throw new Error("The given EventManager is already subscribed.");
        }

        this.managers.push(eventManager);
    }

    public unsubscribe(eventManager: IMessageEventManager): void {
        const index = this.managers.indexOf(eventManager);

        if (index < 0) {
            throw new Error("The given EventManager is not subscribed.");
        }

        this.managers.splice(index, 1);
    }
}
