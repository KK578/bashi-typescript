import { ITask } from "../../common/interface/";
import { ITrainData } from "./";

export class TrainFormatMessageTask implements ITask {
    public invoke(data: ITrainData[]): Promise<string> {
        if (data.length === 0) {
            return Promise.resolve("No train data was found... Bashou...");
        }

        const header = "*Train*: *Platform*\n";
        const table = data.map((result) => `${result.time}: ${result.platform}`)
                          .join("\n");

        return Promise.resolve(table);
    }
}
