import { App } from "./app";
import * as dotenv from "dotenv";

import { RtmConnectionManager } from "./bashi/slack-connection-manager/RtmConnectionManager";
import { SlackConnectionManager } from "./bashi/slack-connection-manager/SlackConnectionManager";
import { SlackRtmClient } from "./bashi/slack-connection-manager/SlackRtmClient";

const envLoaded: dotenv.DotenvResult = dotenv.config();
const error: Error = envLoaded.error;

if (error !== undefined) {
    console.error(error.message);
    process.exit(1);
}

const botToken: string = process.env.SLACK_BOT_TOKEN;
const rtm = new SlackRtmClient(botToken);
const rtmManager = new RtmConnectionManager(rtm);
const scm = new SlackConnectionManager(rtmManager);
const app = new App(scm);

app.start();
