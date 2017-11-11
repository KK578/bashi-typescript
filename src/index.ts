import { App } from "./app";
import * as dotenv from "dotenv";

import { RtmConnectionManager } from "./bashi/slack-connection-manager/RtmConnectionManager";
import { SlackConnectionManager } from "./bashi/slack-connection-manager/SlackConnectionManager";

const envLoaded: dotenv.DotenvResult = dotenv.config();
const error: Error = envLoaded.error;

if (error !== undefined) {
    console.error(error.message);
    process.exit(1);
}

const botToken: string = process.env.SLACK_BOT_TOKEN;
const rtm = new RtmConnectionManager(botToken);
const scm = new SlackConnectionManager(botToken, rtm);
const app = new App(scm);

app.start();
