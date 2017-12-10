import { IWebClient } from "../../interfaces";

export class BaseWebClient {
    protected webClient: IWebClient;

    constructor(webClient: IWebClient) {
        this.webClient = webClient;
    }

    public postMessage(message: any, callback: any): any {
        return this.webClient.chat.postMessage(message.channel, message.text, message);
    }
}
