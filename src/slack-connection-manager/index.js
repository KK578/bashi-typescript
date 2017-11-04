const botToken = process.env.SLACK_BOT_TOKEN;
const SlackClient = require('@slack/client');

const rtm = new SlackClient.RtmClient(botToken);
const web = new SlackClient.WebClient(botToken);
const clientEvents = SlackClient.CLIENT_EVENTS.RTM;

const bot = {};

function onAuthenticated(rtmStartData) {
    bot.name = rtmStartData.self.name;

    console.log(`${bot.name}: Logged in!`);
}

function onConnected() {
    console.log(`${bot.name}: Connected!`);
}

rtm.on(clientEvents.AUTHENTICATED, onAuthenticated);
rtm.on(clientEvents.RTM_CONNECTION_OPENED, onConnected);
rtm.start();

module.exports = {
    rtm,
    web
};
