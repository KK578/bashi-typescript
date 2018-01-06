import * as dotenv from "dotenv";
import { IConfigSettings } from "../interface/config/IConfigSettings";
import { ConfigSettings } from "./ConfigSettings";

export class ConfigLoader {
    public loadConfig(): IConfigSettings {
        const envLoaded: dotenv.DotenvResult = dotenv.config();

        if (envLoaded.error) {
            throw envLoaded.error;
        }

        return new ConfigSettings(envLoaded.parsed);
    }
}
