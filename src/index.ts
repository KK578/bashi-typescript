import * as dotenv from "dotenv";

import { SlackConnectionManager } from "./slack/communication/SlackConnectionManager";

const envLoaded: dotenv.DotenvResult = dotenv.config();
const error: Error = envLoaded.error;

if (error !== undefined) {
    console.error(error.message);
    process.exit(1);
}

const botToken: string = process.env.SLACK_BOT_TOKEN;
const manager = new SlackConnectionManager(botToken);
manager.connect();
