import { IWebClient } from "../../interfaces";

export class BaseWebClient {
    protected webClient: IWebClient;

    constructor(webClient: IWebClient) {
        this.webClient = webClient;
    }

    protected postMessage(message, callback) {
        return this.webClient.chat.postMessage(message.channel, message.text, message);
    }
}
