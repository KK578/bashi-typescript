import { IMessageEvent, IMessageEventHandler } from "../../common/interface/";

export class TrainMessageEventHandler implements IMessageEventHandler {
    public canHandleEvent(event: IMessageEvent): Promise<boolean> {
        const message = event.message.text.toLowerCase();

        return Promise.resolve(/train/.test(message));
    }

    public handleEvent(event: IMessageEvent): Promise<any> {
        console.log("Trains!.");
        console.log(event);

        return Promise.resolve();
    }
}
