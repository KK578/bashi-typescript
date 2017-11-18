import { IRtmListener, ISlackConnectionManager, ITrainDataCrawler } from "../../interfaces";

export class TrainListener implements IRtmListener {
    private url: string;
    private slackConnectionManager: ISlackConnectionManager;
    private trainDataCrawler: ITrainDataCrawler;

    constructor(url: string,
                slackConnectionManager: ISlackConnectionManager,
                trainDataCrawler: ITrainDataCrawler) {
        this.url = url;
        this.slackConnectionManager = slackConnectionManager;
        this.trainDataCrawler = trainDataCrawler;
    }

    public onMessage(data) {
        const text = data.text.toLowerCase();

        if (text.match(/train/)) {
            this.slackConnectionManager.sendMessage({
                channel: data.channel,
                text: "Did someone mention... _Trains_?"
            });

            this.trainDataCrawler.getTrainData(this.url).then((results) => {
                const header = "*Train*: *Platform*\n";
                const table = results.map((result) => `${result.time}: ${result.platform}`)
                                     .join("\n");

                this.slackConnectionManager.sendMessage({
                    channel: data.channel,
                    text: `${header}${table}`
                });
            });
        }
    }
}
