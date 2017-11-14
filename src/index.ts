import * as dotenv from "dotenv";

import { App } from "./app";
import { BashiFactory } from "./factory/bashi-factory";

const envLoaded: dotenv.DotenvResult = dotenv.config();
const error: Error = envLoaded.error;

if (error !== undefined) {
    console.error(error.message);
    process.exit(1);
}

const botToken: string = process.env.SLACK_BOT_TOKEN;
const bashiFactory: BashiFactory = new BashiFactory(botToken);
const app: App = bashiFactory.createApp();

app.start();
