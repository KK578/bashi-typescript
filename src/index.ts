import { App } from "./app";
import { SlackConnectionManager } from "./bashi/slack-connection-manager/SlackConnectionManager";

const scm = new SlackConnectionManager();
const app = new App(scm);

app.start();
