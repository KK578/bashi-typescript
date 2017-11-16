import { IWebClient } from "../../interfaces/node-slack-sdk/IWebClient";

export class BaseWebClient {
    protected webClient: IWebClient;

    constructor(webClient: IWebClient) {
        this.webClient = webClient;
    }

    postMessage(message, callback) {
        return this.webClient.chat.postMessage(message.channel, message.text, message, callback);
    }
}

