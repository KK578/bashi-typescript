import * as request from "request-promise-native";

import { IWebGetTask } from "../../interface/index";

export class WebGetTask implements IWebGetTask {
    public invoke(url: string): Promise<string> {
        return request(url);
    }
}
