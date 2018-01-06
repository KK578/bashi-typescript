import { IConfigSettings } from "../interface/config/IConfigSettings";

export class ConfigSettings implements IConfigSettings {
    public SlackBotToken: string;
    public TrainUrl: string;

    constructor(env: { [name: string]: string }) {
        this.SlackBotToken = env.SLACK_BOT_TOKEN;
        this.TrainUrl = env.TRAIN_URL;
    }
}
