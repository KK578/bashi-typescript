import { WebClient } from "@slack/client";

import { IMessage, IMessageSender } from "../../../common/interface/";

export class SlackMessageSender implements IMessageSender {
    private webClient: WebClient;

    constructor(slackToken: string) {
        this.webClient = new WebClient(slackToken);
    }

    // IConnection
    public connect(): Promise<boolean> {
        return Promise.resolve(true);
    }

    public disconnect(): Promise<boolean> {
        return Promise.resolve(true);
    }

    public sendMessage(message: IMessage): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.webClient.chat.postMessage(message.channel,
                                            message.text,
                                            message,
                                            (err, result) => {
                                                if (err) {
                                                    return reject(err);
                                                }

                                                // TODO: Change to use the result?
                                                return resolve(true);
                                            });
        });
    }
}
