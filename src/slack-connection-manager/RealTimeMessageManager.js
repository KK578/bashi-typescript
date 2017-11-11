// Slack APIs
const EventEmitter = require("events");
const SlackClient = require("@slack/client");
const clientEvents = SlackClient.CLIENT_EVENTS.RTM;
let rtm;

class RealTimeMessageManager extends EventEmitter {
    constructor(botToken) {
        super();

        rtm = new SlackClient.RtmClient(botToken);
        // Data about the bot.
        this.bot = {};

        ////////////////////////////////////////////////////
        // Subscribe and connect.
        rtm.on(clientEvents.AUTHENTICATED, this.onAuthenticated.bind(this));
        rtm.on(clientEvents.RTM_CONNECTION_OPENED, this.onConnected.bind(this));
        rtm.on(clientEvents.RAW_MESSAGE, this.onMessage.bind(this));
    }

    start() {
        rtm.start();
    }

    ////////////////////////////////////////////////////////
    // Event callbacks
    onAuthenticated(rtmStartData) {
        console.debug(rtmStartData);
        this.bot = rtmStartData.self;
        this.users = rtmStartData.users;
        this.groups = rtmStartData.groups;
        this.channels = rtmStartData.channels;
        this.instantMessages = rtmStartData.ims;

        console.log(`${this.bot.name}: Logged in!`);
    }

    onConnected() {
        console.log(`${this.bot.name}: Connected!`);
    }

    onMessage(rtmData) {
        const data = JSON.parse(rtmData);

        switch (data.type) {
            case "message":
                console.log(data);
                if (data.subtype === "bot_message") {
                    this.emit("bot_message", data);
                }
                else if (data.subtype === "message_deleted") {
                    this.emit("message_deleted", data);
                }
                else {
                    this.emit("message", data);
                }
                break;

            case "channel_joined":
                console.log("TODO: Handle channel_joined event");
                break;

            case "channel_left":
                console.log("TODO: Handle channel_left event");
                break;

            case "member_joined_channel":
                this.emit("member_joined_channel", data);
                break;

            case "desktop_notification":
                console.log("TODO: Handle desktop_notification event");
                break;

            default:
                console.debug(`SlackConnectionManager/onMessage ~ Unchecked Message Type: '${data.type}'`, data);
                // falls through
            case "hello":
            case "pong":
            case "reconnect_url":
            case "user_typing":
                // Do not care about these events at the moment.
                break;
        }
    }
}

module.exports = RealTimeMessageManager;
