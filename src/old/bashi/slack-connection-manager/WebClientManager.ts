import { WebClient } from "@slack/client";
import { BaseWebClient } from "../";
import { IWebClientManager } from "../../interfaces";

export class WebClientManager implements IWebClientManager {
    private webClient: BaseWebClient;

    constructor(webClient: BaseWebClient) {
        this.webClient = webClient;
    }

    ///////////////////////////////////////////////////////////
    // WebApiManager
    public sendMessage(message, callback) {
        this.webClient.postMessage(message, callback);
    }
}
