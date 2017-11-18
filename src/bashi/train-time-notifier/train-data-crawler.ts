import * as cheerio from "cheerio";
import * as _ from "lodash";
import * as request from "request-promise-native";

import { ITrainDataCrawler } from "../../interfaces";

export class TrainDataCrawler implements ITrainDataCrawler {
    public getTrainData(url) {
        return request(url).then(this.parseHtml)
                           .catch((err) => []);
    }

    private parseHtml(html) {
        const results = [];
        const $ = cheerio.load(html, { normalizeWhitespace: true });

        $(".row.origin").each((i, element) => {
            const $$ = $(element);

            const time = _.trim($$.find("time").text());
            const platform = $$.find(".times-platform").text().match(/\d+/)[0];

            const o = {
                platform,
                time
            };

            results.push(o);
        });

        return results;
    }
}
