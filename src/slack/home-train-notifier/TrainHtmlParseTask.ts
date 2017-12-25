import * as cheerio from "cheerio";
import * as _ from "lodash";

import { IHtmlParseTask } from "../../common/interface/";
import { ITrainData } from "./";

export class TrainHtmlParseTask implements IHtmlParseTask {
    public invoke(html: string): Promise<ITrainData[]> {
        const results: ITrainData[] = [];
        const $ = cheerio.load(html, { normalizeWhitespace: true });

        $(".row.origin").each((i, element) => {
            const $$ = $(element);

            const time = _.trim($$.find("time").text());
            const platform = $$.find(".times-platform").text().match(/\d+/)[0];

            const trainData: ITrainData = {
                platform,
                time
            };

            results.push(trainData);
        });

        return Promise.resolve(results);
    }
}
