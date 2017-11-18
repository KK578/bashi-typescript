import { ITrainData } from "../";

export interface ITrainDataCrawler {
    getTrainData(url): Promise<ITrainData[]>;
}
