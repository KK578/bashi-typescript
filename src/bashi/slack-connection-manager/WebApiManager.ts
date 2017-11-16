import { WebClient } from "@slack/client";
import { IWebApiManager } from "../../interfaces/slack-connection-manager/IWebApiManager";

export class WebApiManager implements IWebApiManager {
    private webApi: WebClient;

    constructor(botToken) {
        this.webApi = new WebClient(botToken);
    }

    ///////////////////////////////////////////////////////////
    // WebApiManager
    public sendMessage(message) {
        this.webApi.chat.postMessage(message.channel, message.text, message);
    }
}
