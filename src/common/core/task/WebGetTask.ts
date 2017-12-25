import * as request from "request-promise-native";

import { IWebGetTask } from "../../interface/index";

export class WebGetTask implements IWebGetTask {
    public url: string;

    constructor(url: string) {
        this.url = url;
    }

    public invoke(): Promise<string> {
        return request(this.url);
    }
}
