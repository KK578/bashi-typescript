import { TrainMessageEventHandler } from "../";
import { BaseEventManager } from "../../common/core/";
import { IMessageEvent, IMessageEventHandler, IMessageEventManager } from "../../common/interface/";

export class SlackMessageEventManager extends BaseEventManager implements IMessageEventManager {
    constructor() {
        super();

        this.eventHandlers.push(new TrainMessageEventHandler());
    }
}
