import { IConnection, IMessage } from "../";

export interface IMessageSender extends IConnection {
    /**
     * Sends message through connection.
     */
    sendMessage(message: IMessage): Promise<boolean>;
}
