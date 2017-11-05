const botToken = process.env.SLACK_BOT_TOKEN;

// Slack APIs
const SlackClient = require('@slack/client');
const rtm = new SlackClient.RtmClient(botToken);
const web = new SlackClient.WebClient(botToken);
const clientEvents = SlackClient.CLIENT_EVENTS.RTM;

// Data about the bot.
const bot = {};

///////////////////////////////////////////////////////////
// Event callbacks
function onAuthenticated(rtmStartData) {
    bot.name = rtmStartData.self.name;

    console.log(`${bot.name}: Logged in!`);
}

function onConnected() {
    console.log(`${bot.name}: Connected!`);
}

function onMessage(rtmData) {
    const data = JSON.parse(rtmData);

    console.log(data);
}

///////////////////////////////////////////////////////////
// Subscribe and connect.
rtm.on(clientEvents.AUTHENTICATED, onAuthenticated);
rtm.on(clientEvents.RTM_CONNECTION_OPENED, onConnected);
rtm.on(clientEvents.RAW_MESSAGE, onMessage);
rtm.start();

module.exports = {
    rtm,
    web
};
