import { WebClient } from "@slack/client";
import { BaseWebClient } from "./BaseWebClient";

export class SlackWebClient extends BaseWebClient {
    protected webClient: WebClient;

    constructor(botToken: string) {
        const webClient = new WebClient(botToken);
        super(webClient);

        this.webClient = webClient;
    }
}
