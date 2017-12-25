import { IFormatMessageTask } from "../../common/interface/";
import { ITrainData } from "./";

export class TrainFormatMessageTask implements IFormatMessageTask {
    public data: ITrainData[];

    constructor(data: ITrainData[]) {
        this.data = data;
    }

    public invoke(): Promise<string> {
        if (this.data.length === 0) {
            return Promise.resolve("No train data was found... Bashou...");
        }

        const header = "*Train*: *Platform*\n";
        const table = this.data.map((result) => `${result.time}: ${result.platform}`)
                          .join("\n");

        return Promise.resolve(table);
    }
}
