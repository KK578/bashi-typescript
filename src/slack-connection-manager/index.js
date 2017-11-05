const botToken = process.env.SLACK_BOT_TOKEN;

// Slack APIs
const SlackClient = require('@slack/client');
const rtm = new SlackClient.RtmClient(botToken);
const web = new SlackClient.WebClient(botToken);
const clientEvents = SlackClient.CLIENT_EVENTS.RTM;

class SlackConnectionManager {
    constructor() {
        if (!SlackConnectionManager._instance) {
            // Data about the bot.
            this.bot = {};

            ///////////////////////////////////////////////////////////
            // Subscribe and connect.
            rtm.on(clientEvents.AUTHENTICATED, this.onAuthenticated.bind(this));
            rtm.on(clientEvents.RTM_CONNECTION_OPENED, this.onConnected.bind(this));
            rtm.on(clientEvents.RAW_MESSAGE, this.onMessage.bind(this));

            SlackConnectionManager._instance = this;
        }

        return SlackConnectionManager._instance;
    }

    start() {
        rtm.start();
    }

    ///////////////////////////////////////////////////////////
    // Event callbacks
    onAuthenticated(rtmStartData) {
        console.log(rtmStartData);
        this.bot.id = rtmStartData.self.id;
        this.bot.name = rtmStartData.self.name;

        console.log(`${this.bot.name}: Logged in!`);
    }

    onConnected() {
        console.log(`${this.bot.name}: Connected!`);
    }

    onMessage(rtmData) {
        const data = JSON.parse(rtmData);

        switch (data.type) {
            case 'message':
                console.log(data);
                break;

            default:
                console.debug(`SlackConnectionManager/onMessage ~ Unchecked Message Type: '${data.type}'`, data);
                // falls through
            case 'hello':
            case 'pong':
            case 'reconnect_url':
            case 'user_typing':
                // Do not care about these events at the moment.
                break;
        }
    }
}

const instance = new SlackConnectionManager();
Object.freeze(instance);

module.exports = instance;
